import { basicSetup, EditorView } from 'codemirror'
import FS from './fs.js'
import Split from 'split.js'
import Scamper from '../scamper.js'
import { renderToOutput } from '../display.js'
import { ScamperSupport } from '../codemirror/language.js'
import makeScamperLinter from '../codemirror/linter.js'
import { version } from '../version.js'

let editor: EditorView | null = null
const editorPane = document.getElementById('editor')!
const outputPane = document.getElementById('output')!
const fileList   = document.getElementById('files')!
const runButton  = document.getElementById('run')!
const stepButton = document.getElementById('step')!

const stepOnceButton = document.getElementById('step-once')!
const stepStmtButton = document.getElementById('step-stmt')!
const stepAllButton  = document.getElementById('step-all')!

class IDE {
  fs: FS
  editor: EditorView
  currentFile: string
  autosaveId: number
  scamper?: Scamper

  startScamper (isTracing: boolean): void {
    outputPane!.innerHTML = ''
    try {
      this.scamper = new Scamper(outputPane, isTracing, this.getDoc())
    } catch (e) {
      renderToOutput(outputPane, e)
    }
  }

  constructor () {
    this.fs = new FS()
    this.editor = new EditorView({
      doc: '', extensions: [basicSetup, ScamperSupport(), makeScamperLinter(outputPane)], parent: editorPane!
    })
    this.autosaveId = -1

    this.currentFile = this.fs.getLastOpened()
    this.loadCurrentFile()
    this.updateFileList()

    runButton.addEventListener('click', () => {
      this.startScamper(false)
      this.scamper!.runProgram()
    })
    stepButton.addEventListener('click', () => this.startScamper(true))
    stepOnceButton.addEventListener('click', () => this.scamper!.stepProgram())
    stepStmtButton.addEventListener('click', () => this.scamper!.stepStmtProgram())
    stepAllButton.addEventListener('click', () => this.scamper!.runProgram())

    Split(['#file-drawer', '#editor', '#results'], {
      sizes: [15, 50, 35]
    })

    document.getElementById('version')!.innerText = `(${version})`

    this.startAutosaving()

    document.getElementById('new-file-button')!.addEventListener('click', () => this.makeNewFile())
    document.getElementById('download-button')!.addEventListener('click', () => this.downloadCurrentFile())
    document.getElementById('rename-button')!.addEventListener('click', () => this.renameCurrentFile())
    document.getElementById('delete-button')!.addEventListener('click', () => this.deleteCurrentFile())
  }

  startAutosaving () {
    if (this.autosaveId === -1) {
      this.autosaveId = window.setInterval(() => this.saveCurrentFile(), 3000)
    }
  }

  stopAutosaving () {
    window.clearInterval(this.autosaveId)
    this.autosaveId = -1
  }

  getDoc (): string {
    return this.editor!.state.doc.toString()
  }

  setDoc (src: string) {
    this.editor.dispatch(this.editor.state.update({
      changes: { from: 0, to: this.editor.state.doc.length, insert: src }
    }))
  }

  saveCurrentFile () {
    this.fs.saveFile(this.currentFile, this.getDoc())
  }

  loadCurrentFile () {
    const currentFileLabel = document.getElementById('current-file')!
    currentFileLabel.innerText = this.currentFile
    this.setDoc(this.fs.loadFile(this.currentFile))
  }

  changeCurrentFile (filename: string, saveFile: boolean = true) {
    this.stopAutosaving()
    if (saveFile) { this.saveCurrentFile() }
    this.currentFile = filename
    this.fs.setLastOpened(filename)
    this.loadCurrentFile()
    this.updateFileList()
    this.startAutosaving()
  }

  updateFileList () {
    const files = this.fs.getFileList()
    fileList.innerHTML = ''
    const lst = document.createElement('ul')
    for (const file of files) {
      const li = document.createElement('li')
      li.innerText = file
      li.addEventListener('click', () => this.changeCurrentFile(file))
      if (this.fs.getLastOpened() === file) {
        li.classList.add('selected')
      }
      lst.appendChild(li)
    }
    fileList.appendChild(lst)
  }

  makeNewFile () {
    const filename = this.fs.makeUntitledFile()
    this.changeCurrentFile(filename)
    this.updateFileList()
  }

  downloadCurrentFile () {
    this.saveCurrentFile()
    const contents = this.getDoc()
    const hidden = document.createElement('a')
    hidden.href = 'data:attachment/text;charset=utf-8,' + encodeURIComponent(contents)
    hidden.target = '_blank'
    hidden.download = this.currentFile
    hidden.click()
  }

  renameCurrentFile () {
    this.stopAutosaving()
    const filenameLabel = document.getElementById('current-file')!
    const oldName = filenameLabel.innerText
    filenameLabel.setAttribute('contenteditable', 'true')
    filenameLabel.focus()
    window.getSelection()!.selectAllChildren(filenameLabel)
    let isRenaming = true
    const tryCommitFilename = () => {
      const newName = filenameLabel.innerText
      if (newName === oldName) { 
        // N.B.: continue through to clean-up
      } else if (this.fs.fileExists(newName)) {
        alert(`A file named ${newName} already exists.`)
        filenameLabel.innerText = oldName
      } else {
        this.fs.renameFile(oldName, newName)
        this.changeCurrentFile(newName, false)
        this.updateFileList()
      }
      filenameLabel.setAttribute('contenteditable', 'false')
      filenameLabel.removeEventListener('keydown', tryCommitFilename)
      this.startAutosaving()
    }
    filenameLabel.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.code === 'Enter' && isRenaming) {
        // N.B., race condition with focusout? How do I manage this?
        isRenaming = false
        tryCommitFilename()
      }
    })
    filenameLabel.addEventListener('focusout', (e) => {
      if (isRenaming) {
        isRenaming = false
        tryCommitFilename()
      }
    })
  }

  deleteCurrentFile () {
    this.stopAutosaving()
    if (!confirm(`Are you sure you want to delete ${this.currentFile}?`)) { return }
    this.fs.deleteFile(this.currentFile)
    const fileList = this.fs.getFileList() 
    if (fileList.length === 0) {
      this.changeCurrentFile(this.fs.makeUntitledFile(), false)
    } else {
      this.changeCurrentFile(fileList[0], false)
    }
    this.updateFileList()
    this.startAutosaving()
  }
}

export default IDE