import React, { createContext, ReactNode, useState } from "react";

import homeEN from "../locales/en/index.json";
import headerEN from "../locales/en/header.json";

import homePT from "../locales/pt/index.json";
import headerPT from "../locales/pt/header.json";

type I18nContextType = {
  localeKey: Locale;
  locale: LocaleObject;
  nextLocaleKey: Locale;
  toggleLocale: null | (() => void);
};

type Locale = "pt-BR" | "en-US";

type I18nProviderProps = {
  children: ReactNode;
};

type LocaleObject = {
  home: typeof homePT;
  header: typeof headerPT;
};

type LocalesObject = Record<Locale, LocaleObject>;

const locales: LocalesObject = {
  "pt-BR": {
    home: homePT,
    header: headerPT,
  },
  "en-US": {
    home: homeEN,
    header: headerEN,
  },
};

const I18nContext = createContext<I18nContextType>({
  localeKey: "pt-BR",
  toggleLocale: null,
  nextLocaleKey: "en-US",
  locale: locales["pt-BR"],
});

const I18nContextProvider = ({ children }: I18nProviderProps) => {
  const [localeKey, setLocaleKey] = useState<Locale>("pt-BR");
  const [nextLocaleKey, setNextLocaleKey] = useState<Locale>("en-US");

  const toggleLocale = () => {
    setNextLocaleKey(localeKey === "pt-BR" ? "pt-BR" : "en-US");
    setLocaleKey(localeKey === "pt-BR" ? "en-US" : "pt-BR");
  };

  return (
    <I18nContext.Provider
      value={{
        locale: locales[localeKey],
        localeKey,
        nextLocaleKey,
        toggleLocale,
      }}
    >
      {children}
    </I18nContext.Provider>
  );
};

export { I18nContext, I18nContextProvider };
