import React from 'react'
import style from './chapter.module.css'
import ChapterCollection from './ChapterCollection'
import Menu from './Menu'

const Chapter = () => {
  return (
    <>
    <section className={`${style.chapter} section`} id="chapter">
        <h2 className={style.chapter_heading}>What's inside the book</h2>
        <div className={style.chapter_container}>
          <Menu style={style}/>
          <ChapterCollection style={style} />
        </div>
      </section>
    </>
  )
}

export default Chapter