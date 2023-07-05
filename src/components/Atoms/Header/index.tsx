import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import { I18nContext } from "/@/data/context/I18nContext";

import * as S from "./styles";

export default function Header() {
  const { locale, toggleLocale, nextLocaleKey } = useContext(I18nContext);

  return (
    <S.Header>
      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? "currentPage" : "")}
      >
        <h1>RoundATint</h1>
      </NavLink>

      <nav>
        <NavLink
          to="/projeto"
          className={({ isActive }) => (isActive ? "currentPage" : "")}
        >
          {locale.header.about}
        </NavLink>

        <NavLink
          to="/contato"
          className={({ isActive }) => (isActive ? "currentPage" : "")}
        >
          {locale.header.contact}
        </NavLink>

        <button onClick={() => toggleLocale?.()}>{nextLocaleKey}</button>
      </nav>
    </S.Header>
  );
}
