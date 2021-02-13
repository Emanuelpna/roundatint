import React from "react";
import { NavLink } from "react-router-dom";

import * as S from "./styles";

export default function Header() {
  return (
    <S.Header>
      <NavLink to="/" exact activeClassName="currentPage">
        <h1>RoundATint</h1>
      </NavLink>

      <nav>
        <NavLink
          to="/projeto"
          activeStyle={{
            textDecoration: "underline",
          }}
        >
          Sobre o Projeto
        </NavLink>

        <NavLink
          activeStyle={{
            textDecoration: "underline",
          }}
          to="/contato"
        >
          Contato
        </NavLink>
      </nav>
    </S.Header>
  );
}
