import React from 'react'
import styled from 'styled-components'

// interface ElInputProps {
//   rows?: number
// }
// const ElInput: Function = ({ rows = 15 }: ElInputProps): HTMLTextAreaElement => {
const ElInput: Function = ({ rows = 15 }: { rows?: number }): HTMLTextAreaElement => {
  const Textarea = styled.textarea`
    width: 100%;
    box-sizing: border-box;${/* for width 100% exclude padding: https://stackoverflow.com/a/5219611 */''}
  `
  return (
    <Textarea rows={ rows }></Textarea>
  )
}

const App: HTMLElement = (
  <div>
    <h1>hello</h1>
    <ElInput/>
  </div>
)

export default App
