import "./App.css";

import { IntlProvider } from "react-intl";
import { useEffect, useState } from "react";
import { Switch, Route, HashRouter as Router } from "react-router-dom";

import { Provider as LanguageProvider } from "./context/language";
import localization from "./localization";
import Header from "./components/Header";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Trends from "./pages/Trends";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  const isLocale = localStorage.getItem("locale");
  const defaultLang = isLocale ? isLocale : navigator.language;
  const [locale, setLocale] = useState(defaultLang);

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  return (
    <IntlProvider
      messages={localization[locale]}
      locale={locale}
      defaultLocale={defaultLang}>
      <LanguageProvider locale={locale} setLocale={setLocale}>
        <Router>
          <Header locale={locale} setLocale={setLocale} />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/explore">
              <Explore />
            </Route>
            <Route path="/trends">
              <Trends />
            </Route>
            <Route path="*" exact>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </LanguageProvider>
    </IntlProvider>
  );
};

export default App;
