import "./App.css";

import { FormattedMessage, IntlProvider } from "react-intl";
import { useState } from "react";

import { Provider as LanguageProvider } from "./context/language";
import localization from "./localization";
import Header from "./components/Header";

const App = () => {
  const defaultLang = navigator.language;
  const [locale, setLocale] = useState(defaultLang);

  return (
    <IntlProvider
      messages={localization[locale]}
      locale={locale}
      defaultLocale={defaultLang}>
      <LanguageProvider locale={locale} setLocale={setLocale}>
        <Header />
        {/* <div>
          <div>
            <FormattedMessage id="title" />
          </div>
          <button onClick={() => setLocale("tr-TR")}>TR</button>
          <button onClick={() => setLocale("en-US")}>EN</button>
        </div> */}
      </LanguageProvider>
    </IntlProvider>
  );
};

export default App;
