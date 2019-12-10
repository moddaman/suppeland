import React from "react";
import style from "./Article.module.scss";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

export const Article = ({ children }: IProps) => {
  return (
    <article className={style.basic}>
      <div></div>
      {children}
      <div></div>
    </article>
  );
};
