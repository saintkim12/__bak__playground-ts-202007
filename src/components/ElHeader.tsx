import React from 'react'
const ElHeader: Function = ({ code = '#', github = '#' }: { code: string, github: string }): HTMLDivElement => {
  const getLink: Function = (link: string, name: string, icon: string): HTMLButtonElement => (
    link === '#'
      ? <a href={ link } target="_blank" rel="noreferrer" className="btn btn-link btn-lg px-1 text-reset disabled"><span className={`mdi ${icon}`}></span></a>
      : <a href={ link } target={ name } className="btn btn-link btn-lg px-1 text-reset "><span className={`mdi ${icon}`}></span></a>
  )
  return (
    <div className="row">
      <div className="col-12">
        <header className="d-flex">
          <div className="mr-auto">
            <h4 className="m-0 py-2">@saintkim12</h4>
          </div>
          <div className="">
            { getLink(code, 'code', 'mdi-code-tags') }
            { getLink(github, 'github', 'mdi-github') }
          </div>
        </header>
      </div>
    </div>
  )
}

export default ElHeader
