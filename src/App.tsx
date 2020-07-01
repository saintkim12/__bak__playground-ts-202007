import React from 'react'
import styled from 'styled-components'

const ElInput: Function = (): HTMLTextAreaElement => {
  const Textarea = styled.textarea`
    width: 100%;
  `
  return (
    <Textarea rows="15"></Textarea>
  )
}

const App: HTMLElement = (
  <div>
    <h1>hello</h1>
    <ElInput/>
  </div>
)

export default App
