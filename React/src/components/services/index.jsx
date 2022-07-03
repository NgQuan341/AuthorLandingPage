import React from 'react'
import style from './services.module.css'

const Services = () => {
  return (
    <>
    <section className={style.services} id="services">
        <div className={style.services_title}>
          <p>services</p>
          <h2>Services</h2>
        </div>
        <div className={style.services_content}>
          <div className={style.services_box}>
            <div className={style.services_block}>
              <div className={style.services_block_icon}>
                <img src="https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/user-experience.png?alt=media&token=9b8cfe02-dec1-479a-941c-475c9b45395e" alt=""  />
              </div>
              <h3>Experience</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className={style.services_box}>
            <div className={style.services_block}>
              <div className={style.services_block_icon}>
                <img src="https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/network.png?alt=media&token=a9180092-eb8b-400a-8d29-c30a60f88d5d" alt=""  />
              </div>
              <h3>Marketing Goals</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
          <div className={style.services_box}>
            <div className={style.services_block}>
              <div className={style.services_block_icon}>
                <img src="https://firebasestorage.googleapis.com/v0/b/author-api.appspot.com/o/innovation.png?alt=media&token=3bee8491-b10d-43e2-b171-e671218147f0" alt="" />
              </div>
              <h3>Targetting Vission</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services