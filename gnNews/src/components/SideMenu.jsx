import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../utils/Countries";
import { useTranslation } from "react-i18next";

export default function SideMenu() {
  const screenWidth = window.innerWidth;
  const navigate = useNavigate();

  const [style, setStyle] = useState();
  const [menu, setMenu] = useState(null);

  const handleChangeSrc = (e) => {
    navigate(`/country/${e.target.value}`);
  };

  useEffect(() => {
    if (screenWidth < 700) {
      setStyle({ display: "none" });
      setMenu(false);
    }
    if (screenWidth > 700) {
      setMenu(null);
    }
  }, []);

  const handleShowMenu = () => {
    setStyle({ display: "block" });
    setMenu(true);
  };

  const handleHideMenu = () => {
    setStyle({ display: "none" });
    setMenu(false);
  };

  const { t } = useTranslation();

  return (
    <>
      <aside className="side-menu" style={style && style}>
        {countries.map((country) => {
          return (
            <div className="side-menu-box" key={country.id}>
              <button
                className="side-menu-button"
                value={country.short}
                onClick={handleChangeSrc}
                data-cy="nav-country"
              >
                <img src={country.flag} className="side-menu-flag" />{" "}
                {screenWidth > 960
                  ? t(`ctr.${country.country}`)
                  : country.short.toUpperCase()}
              </button>
            </div>
          );
        })}
      </aside>
      {menu === false ? (
        <i
          className="fa-solid fa-circle-chevron-right side-menu-show"
          onClick={handleShowMenu}
        ></i>
      ) : (
        menu && (
          <i
            className="fa-solid fa-circle-chevron-left side-menu-hide"
            onClick={handleHideMenu}
          ></i>
        )
      )}
    </>
  );
}
