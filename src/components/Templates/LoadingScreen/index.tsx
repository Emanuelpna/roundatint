import React from "react";

import Loading from "/@/components/Atoms/Loading";
import Header from "/@/components/Atoms/Header";

export default function LoadingScreen() {
  return (
    <main>
      <Header />

      <Loading />
    </main>
  );
}
