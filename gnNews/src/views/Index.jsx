import React, { useState } from "react";
import { Provider } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainContent from "../components/MainContent";
import SideMenu from "../components/SideMenu";
import store from "../utils/Store";

export default function Index() {
  const [src, setSrc] = useState(
    "https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=763da7d371964b079a9d728a1032baf6"
  );

  const [articlesCount, setArticlesCount] = useState(null);

  return (
    <>
      <Provider store={store}>
        <Header />
        <SideMenu setSrc={setSrc} />
        <MainContent src={src} setArticlesCount={setArticlesCount} />
        <Footer articlesCount={articlesCount && articlesCount} />
      </Provider>
    </>
  );
}
