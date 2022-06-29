import React, { useEffect } from 'react'
import useActiveMenuScoll from '../../hook/useActiveMenuScoll'

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
    const handleMenuScroll = () =>{
        useActiveMenuScoll(style, `chapter`)
    }
    useEffect(()=>{
        handleMenuScroll()
    },[])
  return (
    <div className={style.chapter_menu}>
        <ul>
            {
                items.map((item,index)=>(
                    <li key={index}><a href=""  className={item.active?style.active:``}>{item.title}</a></li>
                ))
            }
        </ul>
    </div>
  )
}

export default Menu