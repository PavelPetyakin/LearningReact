import React from "react";
import s from "./style.scss";

export interface IUser {
  avatarUrl: string;
  name: string;
}

export function User(props: IUser) {
  const { avatarUrl, name } = props;

  return (
    <div className={s.user}>
      <img className={s.userAvatar} src={avatarUrl}/>
      <div className={s.userName}>{name}</div>
    </div>
  )
}