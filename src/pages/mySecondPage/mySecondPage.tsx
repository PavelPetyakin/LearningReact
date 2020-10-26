import { Button } from "components/buttons";
import React from "react";
import { Link } from "react-router-dom";
import { Size } from "../../components/buttons/button/button";
import s from "./style.scss";

export function MySecondPage() {
  return (
    <div className={s.container}>
     <div className={s.wrap}>
       <div className={s.cont}>
         <div className={s.blank1}/>
         <Link to={"/"} className={s.link}>
           <Button size={Size.MEDIUM} name={"1"} onClick={() => undefined}/>
         </Link>
       </div>
       <div className={s.cont}>
         <div className={s.blank2}/>
         <Link to={"/task"} className={s.link}>
           <Button size={Size.MEDIUM} name={"2"} onClick={() => undefined}/>
         </Link>
       </div>
       <div className={s.cont}>
         <div className={s.blank3}/>
         <Link to={"/myfirstpage"} className={s.link}>
           <Button size={Size.MEDIUM} name={"3"} onClick={() => undefined}/>
         </Link>
       </div>
     </div>
    </div>
  )
}

