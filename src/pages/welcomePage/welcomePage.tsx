import { Button } from "components/buttons";
import React from "react";
import { Icon } from "../../assets/svg";
import { Size } from "../../components/buttons/button/button";
import s from "./style.scss";

export function WelcomePage() {
  return (
    <div className={s.wrapper}>
      <div className={s.image}>
        <div className={s.imageWrap}>
          <div className={s.imageWrapInfo}>
            <div className={s.news}>ОБНОВЛЕНИЕ 2020</div>
            <div className={s.size}>221 м<sup>2</sup></div>
            <div className={s.desc}>Красота и надёжность камня</div>
            <button className={s.button}>
              <svg className={s.buttonIcon} version="1.1" id="Capa_1" x="0px" y="0px"
                width="32px" height="32px" viewBox="0 0 304.899 304.899"
              ><path d="M0.006,152.45c0,20.344,16.546,36.893,36.894,36.893h78.669v78.663c0,20.345,16.546,36.894,36.893,36.894
			c20.351,0,36.894-16.549,36.894-36.894v-78.663H268c20.345,0,36.894-16.549,36.894-36.893c0-20.348-16.549-36.894-36.894-36.894
			h-78.645V36.894C189.355,16.546,172.812,0,152.462,0c-20.347,0-36.893,16.546-36.893,36.894v78.663H36.9
			C16.553,115.557,0.006,132.103,0.006,152.45z M121.718,127.854c3.401,0,6.149-2.756,6.149-6.149V36.894
			c0-13.564,11.031-24.596,24.595-24.596c13.565,0,24.596,11.031,24.596,24.596v84.812c0,3.393,2.75,6.149,6.149,6.149H268
			c13.565,0,24.596,11.03,24.596,24.596c0,13.564-11.03,24.596-24.596,24.596h-84.793c-3.399,0-6.149,2.756-6.149,6.148v84.812
			c0,13.565-11.03,24.596-24.596,24.596c-13.564,0-24.595-11.03-24.595-24.596v-84.812c0-3.393-2.748-6.148-6.149-6.148H36.9
			c-13.565,0-24.596-11.031-24.596-24.596c0-13.565,11.031-24.596,24.596-24.596H121.718z"/>
             </svg>
             Подробнее
           </button>
         </div>
        </div>
      </div>
      welcome page!!
    </div>
  );
}
