import React from 'react'

const Menu = (props) => {
    const {style} = props
    const items = [
        {
            title:`Title page`,
            active: true
        },
        {
            title:`Copyright`,
            active: false,
        },
        {
            title:`Table of contents`,
            active: false,
        },
        {
            title:`Dedication`,
            active: false,
        },
        {
            title:`Foreword`,
            active: false,
        },
        {
            title:`Prologue`,
            active: false,
        },
        {
            title:`Epilogue`,
            active: false,
        },
        {
            title:`Epigraph`,
            active: false,
        }, 
      ]
  return (
    <div className={style.chapter_menu}>
        <ul>
            {
                items.map((item,index)=>(
                    <li key={index}><a href=""  className={item.active?style.current:``}>{item.title}</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu