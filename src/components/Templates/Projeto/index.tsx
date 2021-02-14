import React, { ReactNode } from "react";

import { Grid } from "/@/components/Atoms/Grid";
import Header from "/@/components/Atoms/Header";
import { Spacer } from "/@/components/Atoms/Spacer";

import * as S from "./styles";

type ProjetoProps = {
  children: ReactNode;
};

export default function Projeto({ children }: ProjetoProps) {
  return (
    <main>
      <Header />

      <Spacer size={32} />

      <Grid.Container>
        <Grid.Column
          spanRows={{
            xs: 12,
          }}
        >
          <S.Content>{children}</S.Content>
        </Grid.Column>
      </Grid.Container>
    </main>
  );
}
