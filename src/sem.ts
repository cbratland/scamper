import { Op, Value, Env } from './value.js'
import { ICE, Id, noRange, ScamperError } from './lang.js'
import * as S from './lang.js'
import * as V from './value.js'
import * as C from './contract.js'

class Control {
  idx: number
  ops: Op[]

  constructor (ops: Op[]) {
    this.idx = 0
    this.ops = [...ops]   // N.B., make a copy because we mutate ops!
  }

  isEmpty (): boolean { return this.idx >= this.ops.length }
  next (): Op { return this.ops[this.idx++] }

  toString (): string {
    return `[idx=${this.idx}, ops=${this.ops.map(V.opToString).join(',')}]`
  }

  clone(): Control {
    const ret = new Control(this.ops);
    ret.idx = this.idx
    return ret
  }
}

class ExecutionState {
  stack: Value[]
  env: Env
  control: Control
  dump: [Value[], Env, Control][]

  constructor (env: Env, ops: Op[]) {
    this.stack = []
    this.env = env
    this.control = new Control(ops)
    this.dump = []
  }

  isFinished(): boolean { return this.control.isEmpty() }

  isControlEmpty(): boolean { return this.control.isEmpty() }

  dumpAndSwitch (stack: Value[], env: Env, ops: Op[]): void {
    this.dump.push([this.stack, this.env, this.control])
    this.stack = stack
    this.env = env
    this.control = new Control(ops)
  }

  isDumpEmpty() { return this.dump.length === 0 }

  popDump () {
    const [stack, env, control] = this.dump.pop()!
    this.stack = stack
    this.env = env
    this.control = control
  }

  clone() {
    const ret = new ExecutionState(this.env, [])
    ret.stack = [...this.stack]
    ret.env = this.env    // NOTE: do I need to clone the env, too?
    ret.control = this.control.clone()
    ret.dump = this.dump.map(([stack, env, control]) => [[...stack], env, control.clone()] as [Value[], Env, Control])
  }
}

/**
 exp: (+ (* 1 2) (/ 3 4) 5) 
 ops: [+, *, 1, 2, ap(2), /, 3, 4, ap(2), 5, ap(3)]
 */

/**
 exp (+ (* 1 2) (/ 3 4) 5)
 ops: [_, _, _, 2, ap(2), /, 3, 4, ap(2), 5, ap(3)]
 stack: +, *
 */

function valueToExp (v: Value): S.Exp {
  if (V.isNumber(v)) {
    return S.mkNum(v as number, noRange)
  } else if (V.isBoolean(v)) {
    return S.mkBool(v as boolean, noRange)
  } else if (V.isString(v)) {
    return S.mkStr(v as string, noRange)
  } else if (V.isNull(v)) {
    return S.mkVar('null', noRange)
  } else if (V.isVoid(v)) {
    return S.mkVar('void', noRange)
  } else if (V.isArray(v)) {
    return S.mkApp (S.mkVar('vector', noRange), (v as Value[]).map(valueToExp), '(', noRange)
  } else if (V.isClosure(v)) {
    
  }
  throw new ICE('sem.valueToExp', 'Unimplemented')
}

function dumpToExp ([stack, env, control]: [Value[], Env, Control]): S.Exp {
  let expStack = stack.map(valueToExp)
  let stackIdx = stack.length - 1
  throw new ICE('sem.valueToExp', 'Unimplemented')
}

function stateToExp (state: ExecutionState): S.Exp | null {
  // TODO: fill me out!
  return null
}

export function expToOps (e: S.Exp): Op[] {
  switch (e.tag) {
    case 'var':
      return [V.mkVar(e.name, e.range)]
    case 'num':
      return [V.mkValue(e.value)]
    case 'bool':
      return [V.mkValue(e.value)]
    case 'char':
      return [V.mkValue(V.mkChar(e.value))]
    case 'str':
      return [V.mkValue(e.value)]
    case 'lam':
      return [V.mkCls(e.args, expToOps(e.body))]
    case 'let':
      const valOps = e.bindings.map((b) => b.body).flatMap(expToOps)
      return valOps.concat([V.mkLet(e.bindings.map((b) => b.name))]).concat(expToOps(e.body))
    case 'app':
      return [e.head].concat(e.args).flatMap(expToOps).concat([V.mkAp(e.args.length, e.range)])
    case 'if':
      return expToOps(e.guard).concat([V.mkIf(expToOps(e.ifb), expToOps(e.elseb), e.range)])
    case 'begin':
      return e.exps.flatMap(expToOps).concat([V.mkSeq(e.exps.length)])
    case 'match':
      return expToOps(e.scrutinee).concat([V.mkMatch(e.branches.map((b) => ({ pattern: b.pattern, body: expToOps(b.body) })), e.range)])
  }
}

export function tryMatch (p: S.Pat, v: Value): [string, Value][] | undefined {
  if (p.tag === 'wild') {
    return []
  } else if (p.tag === 'var') {
    return [[p.name, v]]
  } else if (p.tag === 'null' && v === null) {
    return []
  } else if (p.tag === 'bool' && typeof v === 'boolean' && p.value === v) {
    return []
  } else if (p.tag === 'num' && typeof v === 'number' && p.value === v) {
    return []
  } else if (p.tag === 'str' && typeof v === 'string' && p.value === v) {
    return []
  } else if (p.tag === 'ctor' && (V.isPair(v) || V.isStruct(v))) {
    const head = p.ctor
    const args = p.args
    if ((head === 'pair' || head === 'cons') && args.length === 2 && V.isPair(v)) {
      const env1 = tryMatch(args[0], (v as V.Pair).fst)
      const env2 = tryMatch(args[1], (v as V.Pair).snd)
      return env1 && env2 ? env1.concat(env2) : undefined
  } else if (V.isStructKind(v, head)) {
      const fields = [...((v as V.Struct).fields).values()]
      if (fields.length === args.length) {
        let env: [string, Value][] = []
        for (let i = 0; i < fields.length; i++) {
          const env2 = tryMatch(args[i], fields[i])
          if (!env2) {
            return undefined
          }
          env = env.concat(env2)
        }
        return env
      } else {
        return undefined
      }
    }
  } else {
    return undefined
  }
}

export function step (display: (v: any) => void, state: ExecutionState): void {
  const op = state.control.next()
  const stack = state.stack
  switch (op.tag) {
    case 'val':
      stack.push(op.value)
      break
    case 'cls':
      stack.push(V.mkClosure(op.params.length, op.params, op.ops, state.env))
      break
    case 'var':
      if (state.env.has(op.name)) {
        stack.push(state.env.get(op.name)!)
      } else {
        throw new ScamperError('Runtime', `Referenced unbound identifier "${op.name}".`, undefined, op.range)
      }
      break
    case 'ap':
      if (stack.length >= op.arity + 1) {
        const head = stack[stack.length - op.arity - 1]
        const args = op.arity === 0 ? [] : stack.slice(-op.arity)
        for (let i = 0; i < op.arity + 1; i++) { stack.pop() }
        if (V.isClosure(head)) {
          const closure = head as V.Closure
          if (closure.params.length !== args.length) {
            throw new ScamperError('Runtime', `Function expected ${closure.params.length} arguments, passed ${args.length} instead.`, undefined, op.range)
          } else {
            // TODO: here, we can check if this control is done.
            // If so, then this is a tail call! No need to dump,
            // just overwrite the current state and go forward.
            state.dumpAndSwitch([], closure.env.extend(closure.params.map((p, i) => [p, args[i]])), closure.ops)
          }
        } else if (V.isJsFunction(head)) {
          const fn = head as Function
          try {
            const result = fn(...args) as Value
            stack.push(result)
          } catch (e) {
            // N.B., annotate any errors from foreign function calls with
            // range information from this application
            if (e instanceof ScamperError) {
              e.source = fn.name
              e.range = op.range
            }
            throw e
          }
        }
      } else {
        throw new ICE('sem.step', `Not enough arguments on stack. Need ${op.arity + 1}, have ${stack.length}`)
      }
      break
    case 'if':
      if (stack.length >= 1) {
        const guard = stack.pop()!
        if (guard === true) {
          state.dumpAndSwitch([], state.env, op.ifb)
        } else if (guard === false) {
          state.dumpAndSwitch([], state.env, op.elseb)
        } else {
          throw new ScamperError('Runtime', `Boolean expected in conditional, received ${V.valueToString(guard)} instead`, undefined, op.range)
        }
      } else {
        throw new ICE('sem.step', `Guard missing from stack for conditional`)
      }
      break
    case 'let':
      if (stack.length >= op.names.length) {
        const values = stack.slice(-op.names.length)
        for (let i = 0; i < op.names.length; i++) { stack.pop() }
        state.env = state.env.extend(op.names.map((n, i) => [n, values[i]]))
        // TODO: need to pop the env at some point, right?
      } else {
        throw new ICE('sem.step', `Not enough values on stack for let binding`)
      }
      break
    case 'disp':
      if (stack.length >= 1) {
        const value = stack.pop()
        display(value)
      } else {
        throw new ICE('sem.step', `Value missing from stack for display`)
      }
      break
    case 'seq':
      const values = stack.slice(-op.numSubexps)
      if (stack.length >= op.numSubexps) {
        // N.B., the top of the stack is the last value created which we want to return!
        const ret = stack.pop()
        for (let i = 1; i < op.numSubexps; i++) { stack.pop() }
        stack.push(ret)
      } else {
        throw new ICE('sem.step', `Not enough values on stack for sequence, ${op.numSubexps} expected, ${stack.length} found`)
      }
    break
    case 'match':
      if (stack.length >= 1) {
        const scrutinee = stack.pop()!
        let foundMatch = false
        for (let i = 0; !foundMatch && i < op.branches.length; i++) {
          const bindings = tryMatch(op.branches[i].pattern, scrutinee)
          if (bindings) {
            state.dumpAndSwitch([], state.env.extend(bindings), op.branches[i].body)
            foundMatch = true
          }
        }
        if (!foundMatch) {
          throw new ScamperError('Runtime', `No pattern matches for ${V.valueToString(scrutinee)}`, undefined, op.range)
        }
      } else {
        throw new ICE('sem.step', `Scrutinee missing from stack for match`)
      }
    break
    default:
      throw new ICE('sem.step', `Unknown op tag: ${(op as any).tag}`)
  }
  // N.B., pop the dump until we arrive at a non-finished state
  while (state.isFinished() && !state.isDumpEmpty()) {
    const ret = state.stack.pop()!
    state.popDump()
    state.stack.push(ret)
  }
}

function execute (display: (v: any) => void, state: ExecutionState): Value {
  while (!state.isFinished()) {
    step(display, state)
  }
  if (state.stack.length !== 1) {
    throw new ICE('sem.execute', `Stack size is not 1 after execution: ${state.stack}`)
  }
  return state.stack.pop()!
}

export function runProgram (builtinLibs: Map<Id, [Id, Value][]>, display: (v: any) => void, env: Env, prog: S.Prog) {
  prog.forEach((stmt) => {
    switch (stmt.tag) {
      case 'binding': {
        try {
          const state = new ExecutionState(env, expToOps(stmt.body))
          const result = execute(display, state)
          if (env.has(stmt.name)) {
            throw new ScamperError('Runtime', `Identifier ${stmt.name} already bound at the global scope`, undefined, stmt.range)
          }
          env.set(stmt.name, result)
        } catch (e) {
          display(e)
        }
        break
      }
      case 'import': {
        if (builtinLibs.has(stmt.modName)) {
          env = env.extend(builtinLibs.get(stmt.modName)!)
        } else {
          throw new ScamperError('Runtime', `Module ${stmt.modName} not found`, undefined, stmt.range)
        }
        break
      }
      case 'stmtexp': {
        try {
          const state = new ExecutionState(env, expToOps(stmt.body))
          execute(display, state)
        } catch (e) {
          display(e)
        }
      }
      break
      case 'display': {
        try {
          const state = new ExecutionState(env, expToOps(stmt.body))
          const result = execute(display, state)
          display(result)
        } catch (e) {
          display(e)
        }
      }
      break
      case 'struct': {
        const name = stmt.id
        const predFn = function (v: any) {
          C.checkContract(arguments, C.contract(`${name}?`, [C.any]))
          return V.isStructKind(v, name)
        }
        V.nameFn(`${name}?`, predFn)
        const pred: [string, Value] = [`${name}?`, predFn]

        const ctorFn = function (...args: any[]) {
          C.checkContract(arguments, C.contract(name, stmt.fields.map((f) => C.any)))
          return V.mkStruct(name, args)
        }
        V.nameFn(name, ctorFn)
        const ctor: [string, Value] = [name, ctorFn]

        const fieldFns: [string, Value][] = []
        stmt.fields.forEach((f, i) => {
          const fieldName = `${name}-${f}`
          const fn = function (v: V.Struct) {
            C.checkContract(arguments, C.contract(fieldName, [C.struct(name)]))
            return v.fields[i]
          }
          V.nameFn(fieldName, fn)
          fieldFns.push([fieldName, fn])
        })

        env = env.extend([pred, ctor, ...fieldFns])
      }
      break
    }
  })
}

// TODO: these functions are used by Javascript libraries to invoke higher-order
// functions that could potentially be Scamper closures. We don't expect them to
// side-effect. Hence, we pass in a "dummy" display function that does nothing.
// However, if we allow side-effecting higher-order functions in the future,
// we'll need to revisit this design decision.

function runClosure (closure: V.Closure, ...args: Value[]): Value {
  const state = new ExecutionState(closure.env.extend(closure.params.map((x, i) => [x, args[i]])), closure.ops)
  return execute((v) => { }, state)
}

export function callFunction (fn: V.Closure | Function, ...args: any): any {
  if (V.isClosure(fn)) {
    return runClosure(fn as V.Closure, ...args)
  } else {
    return (fn as Function)(...args)
  }
}