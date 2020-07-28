import React from "react";

interface IPropsErrorPage {
  error: Error;
}

export const ErrorPage = (props: IPropsErrorPage) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "100%",
      }}
    >
      <div>
        <h1>🤯️ Упс, что-то случилось 🤯️ </h1>
        <div>{props.error.message}</div>
        <a href="">ПЕРЕЗАГРУЗИТЬ СТРАНИЦУ</a>
      </div>
    </div>
  );
};
