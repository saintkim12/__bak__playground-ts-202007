import React from 'react'
import PerfectScrollbar from 'perfect-scrollbar'
import 'perfect-scrollbar/css/perfect-scrollbar.css'

const ElMenu: React.SFC = ({ height = '100%', children }: { height: string, children: any }): HTMLDivElement => {
  let scrollbarRef = null
  const setScrollbarRef: any = (ref: any) => {
    scrollbarRef = ref
    new PerfectScrollbar(scrollbarRef)
  }
  return (
    <div ref={setScrollbarRef} style={{ position: 'relative', height: height }}>
      { children }
    </div>
  )
}

export default ElMenu
