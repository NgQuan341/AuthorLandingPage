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
                <img src="./assets/images/user-experience.png" alt=""  />
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
                <img src="./assets/images/network.png" alt=""  />
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
                <img src="./assets/images/innovation.png" alt="" />
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