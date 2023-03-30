import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SideMenu from "../components/SideMenu";
import i18next from "i18next";
import Backend from "i18next-http-backend";
import { I18nextProvider } from "react-i18next";
import { Suspense } from "react";

export default function Index() {
  const [articlesCount, setArticlesCount] = useState(null);

  const lng = localStorage.getItem("language");

  i18next.use(Backend).init({
    lng: lng,
    fallbackLng: "pl",
    react: {
      useSuspense: false,
    },
    backend: {
      loadPath: "../src/i18next/{{lng}}.json",
    },
  });

  return (
    <>
      <I18nextProvider i18n={i18next}>
        <Header />
        <SideMenu />
        <MainContent setArticlesCount={setArticlesCount} />
        <Footer articlesCount={articlesCount && articlesCount} />
      </I18nextProvider>
    </>
  );
}
