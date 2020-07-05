import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@mdi/font/css/materialdesignicons.min.css'
import ElHeader from '~components/ElHeader'
import ElMenu from '~components/ElMenu'
import ElContent from '~components/ElContent'
import Contents from '~data'

const URL: { CODE: string, GITHUB: string } = {
  CODE: 'https://github.com/saintkim12/playground-ts-202007',
  GITHUB: 'https://saintkim12.github.io/'
}
// App은 메소드(클래스) 형태가 아님
const App: HTMLElement = (
  <div className="container-fluid">
    <ElHeader code={URL.CODE} github={URL.GITHUB} />
    <div className="row">
      <div className="d-none d-sm-block col-sm-4 col-md-2 px-1">
        <ElMenu/>
      </div>
      <div className="col-sm-8 col-md-10 pr-0">
        <ElContent>
          {Contents}
        </ElContent>
      </div>
    </div>
  </div>
)

export default App
