import React, { useContext } from "react";

import Projeto from "/@/components/Templates/Projeto";

import SobreProjeto from "./content/SobreProjeto.mdx";
import AboutProject from "./content/AboutProject.mdx";
import { I18nContext } from "/@/data/context/I18nContext";

export default function ProjectPage() {
  const { localeKey } = useContext(I18nContext);

  return (
    <Projeto>
      {localeKey === "pt-BR" && <SobreProjeto />}
      {localeKey === "en-US" && <AboutProject />}
    </Projeto>
  );
}
