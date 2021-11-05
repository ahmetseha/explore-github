import * as React from "react";

const Language = React.createContext();

function Provider({ children, locale, setLocale }) {
  return (
    <Language.Provider
      value={{
        locale,
        setLocale,
      }}>
      {children}
    </Language.Provider>
  );
}

export { Provider, Language };
