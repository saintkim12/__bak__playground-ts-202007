import React from 'react'
import ElWrapScrollbar from './ElWrapScrollbar'

const ElMenu = () => {
  const menu: Array<{ title: string, href: string }> = [
    { title: '이렇게 일했어요', href: '#did' },
    { title: '이 일에 자신이 있어요', href: '#proud' },
    { title: '이런걸 해보고싶어요', href: '#todo' }
  ]
  return (
    <ElWrapScrollbar height="calc(100vh - 24px)">
      <div className="mr-2 py-1">
        <ul className="list-group">{menu.map(({ title, href }, i) =>
          <a key={i} href={href} className={`list-group-item list-group-item-action ${''}`}>{title}</a>
        )}
        </ul>
      </div>
    </ElWrapScrollbar>
  )
}

export default ElMenu
