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
        <NavLink to="/projeto" activeClassName="currentPage">
          Sobre o Projeto
        </NavLink>

        <NavLink to="/contato" activeClassName="currentPage">
          Contato
        </NavLink>
      </nav>
    </S.Header>
  );
}
