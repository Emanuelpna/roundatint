import React, { useContext } from "react";

import { I18nContext } from "/@/data/context/I18nContext";

import Header from "/@/components/Atoms/Header";
import Loading from "/@/components/Atoms/Loading";

export default function LoadingScreen() {
  const { locale } = useContext(I18nContext);

  return (
    <main>
      <Header />

      <Loading loadingText={locale.home.loading} />
    </main>
  );
}
