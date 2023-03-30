import React, { useState } from "react";
import logo from "../assets/GNnews.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDisplayType } from "../utils/Slice";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

export default function Header() {
  const [pop, setPop] = useState({ display: "none" });
  const [tiles, setTiles] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleDisplayTypeChange = (newDisplayType) => {
    dispatch(setDisplayType(newDisplayType));
  };

  const changeLanguage = (lng) => {
    i18next.changeLanguage(lng);
    localStorage.setItem("language", lng);
  };

  const handleClick = () => {
    navigate("/");
  };

  const handleShowPopup = () => {
    setPop({ display: "block" });
  };

  const handleClosePopup = () => {
    setPop({ display: "none" });
  };

  const handleChangeViewList = () => {
    setTiles(!tiles);
    handleDisplayTypeChange("list");
  };

  const handleChangeViewTiles = () => {
    setTiles(!tiles);
    handleDisplayTypeChange("tiles");
  };

  return (
    <>
      <div className="header">
        <img
          data-cy="logo"
          src={logo}
          alt="GNnews"
          className="header-logo"
          onClick={handleClick}
        />
        <div className="header-view-box">
          {tiles ? (
            <button
              data-cy="view-tiles"
              className="header-view-language"
              onClick={handleChangeViewList}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          ) : (
            <button
              data-cy="view-list"
              className="header-view-language"
              onClick={handleChangeViewTiles}
            >
              <i className="fa-solid fa-table-cells-large"></i>
            </button>
          )}
          <div>
            <button
              data-cy="pl"
              className="header-view-language"
              onClick={() => changeLanguage("pl")}
            >
              PL
            </button>
            <button
              data-cy="en"
              className="header-view-language"
              onClick={() => changeLanguage("en")}
            >
              EN
            </button>
          </div>
        </div>
        <button
          data-cy="popup"
          className="header-popup-button"
          title="Click me!"
          onClick={handleShowPopup}
        >
          <i className="fa-regular fa-face-surprise"></i>
        </button>
      </div>
      <div style={pop} className="popup">
        <h1>Dzień dobry, gnStudio!</h1>
        <p>Gdyby wszystkie zadania rekrutacyjne były tak ekscytujące!.. :)</p>
        <p>
          Największą frajdę jak zawsze sprawiają mi rzeczy, z którymi mam
          trudności - ten moment kiedy w końcu coś zacznie działać jest
          najpiękniejszy. Dlatego muszę tu wymienić Redux oraz i18next. Przed
          przystąpieniem do projektu z nimi nie pracowałam, wymagały trochę
          kombinowania oraz researchu, a teraz żałuję, że nie poznałam ich
          wcześniej (tyle możliwości!).
        </p>
        <p>
          Jedyną prawdziwą przeszkodą było API - planowałam po skończeniu
          projektu wrzucić go na Netlify w całości, ale niestety szyko się
          okazało, że News API nie pozwala na pobieranie artykułów w trybie
          innym niż dev.
        </p>
        <button
          data-cy="close"
          onClick={handleClosePopup}
          className="popup-close-button"
        >
          {t("Close")}
        </button>
      </div>
    </>
  );
}
