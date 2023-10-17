import FS from './fs.js'
import { version } from '../version.js'

function firstNLines(str: string, n: number): string {
  return str.split('\n').slice(0, n).join('\n')
}

class FileChooser {

  fs: FS

  constructor () {
    this.fs = new FS()
  }

  downloadFile (filename: string): void {
    const contents = this.fs.loadFile(filename)
    const hidden = document.createElement('a')
    hidden.href = 'data:attachment/text;charset=utf-8,' + encodeURIComponent(contents)
    hidden.target = '_blank'
    hidden.download = filename
    hidden.click()
  }

  makeFileDiv (filename: string): HTMLElement {
    const ret = document.createElement('div')
    ret.classList.add('file')

    const header = document.createElement('div')
    header.classList.add('header')
    ret.appendChild(header)

    const preview = document.createElement('div')
    preview.classList.add('preview')
    ret.appendChild(preview)

    const lastModified = document.createElement('div')
    lastModified.classList.add('last-modified')
    ret.appendChild(lastModified)

    header.innerText = filename
    preview.innerText = firstNLines(this.fs.loadFile(filename), 5)
    // lastModified.innerText = `Last modified: ${new Date(file.lastModified).toLocaleString()}`

    const actionBar = document.createElement('div')
    actionBar.classList.add('actions')
    ret.appendChild(actionBar)

    const downloadButton = document.createElement('button')
    downloadButton.classList.add('fa-solid')
    downloadButton.classList.add('fa-download')
    downloadButton.addEventListener('click', (e) => {
      this.downloadFile(filename)
      e.stopPropagation()
    })
    actionBar.appendChild(downloadButton)

    const renameButton = document.createElement('button')
    renameButton.classList.add('fa-solid')
    renameButton.classList.add('fa-pencil')
    actionBar.appendChild(renameButton)

    const deleteButton = document.createElement('button')
    deleteButton.classList.add('fa-solid')
    deleteButton.classList.add('fa-trash')
    actionBar.appendChild(deleteButton)

    ret.addEventListener('click', () => {
      const params = new URLSearchParams({ filename })
      window.open(`ide-${version}.html?${params.toString()}`)
    })

    return ret
  }

  makeNewFileDiv(): HTMLElement {
    const ret = document.createElement('div')
    ret.classList.add('file')
    
    const header = document.createElement('div')
    header.innerText = 'New file (not working!)'
    ret.appendChild(header)

    // TODO: implement click behavior!

    return ret
  }

  populateChooser (container: HTMLElement): void {
    const files = this.fs.getFileList() 
    for (const file of files) {
      container.appendChild(this.makeFileDiv(file))
    } 
    container.appendChild(this.makeNewFileDiv())
  }
}

export default FileChooser