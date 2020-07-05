import React from 'react'
import 'github-markdown-css'
import ElWrapScrollbar from './ElWrapScrollbar'
const ElContent: Function = ({ docType = 'md', children: __html }: { docType: String, children: HTMLElement }): HTMLDivElement => {
  return (
    <ElWrapScrollbar height="calc(100vh - 49px)">
      <div className="pr-1">
        <section className="markdown-body" dangerouslySetInnerHTML={{ __html }}></section>
        {docType === 'md' ? <small className="float-right mr-2 mt-1 mb-2">본 문서는 Markdown으로 작성되었습니다.</small> : ''}
        {/* {docType === 'md' ? <small className="float-right mr-2">본 문서는 Markdown으로 작성되었습니다.</small> : ''} */}
      </div>
    </ElWrapScrollbar>
  )
}

export default ElContent
