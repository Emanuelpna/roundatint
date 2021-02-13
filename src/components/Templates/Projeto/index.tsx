import React from "react";

import { Grid } from "/@/components/Atoms/Grid";
import Header from "/@/components/Atoms/Header";
import { Spacer } from "/@/components/Atoms/Spacer";

export default function Projeto() {
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
          <h3>A ideia desse projeto é</h3>
        </Grid.Column>
      </Grid.Container>
    </main>
  );
}
