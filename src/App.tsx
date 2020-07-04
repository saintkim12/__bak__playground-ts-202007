import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import styled from 'styled-components'
import ElHeader from '~components/ElHeader'
import ElMenu from '~components/ElMenu'
import ElContent from '~components/ElContent'
import Contents from '~data'

// 한글한글
// interface ElInputProps {
//   rows?: number
// }
// const ElInput: Function = ({ rows = 15 }: ElInputProps): HTMLTextAreaElement => {
// eslint-disable-next-line
const ElInput: Function = ({ rows = 15 }: { rows?: number }): HTMLTextAreaElement => {
  const Textarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;${/* for width 100% exclude padding: https://stackoverflow.com/a/5219611 */''}
  `
  return (
    <Textarea className="form-control" rows={ rows }></Textarea>
  )
}

// App은 메소드(클래스) 형태가 아님
const App: HTMLElement = (
  <div className="container-fluid">
    <ElHeader/>
    <div className="row">
      <div className="col-3 px-1">
        <ElMenu/>
      </div>
      <div className="col-9 pr-0">
        <ElContent>
          {Contents}
        </ElContent>
      </div>
    </div>
  </div>
)

export default App
