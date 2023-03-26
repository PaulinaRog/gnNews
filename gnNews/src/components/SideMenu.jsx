import React from "react";
import { useNavigate } from "react-router-dom";
import { countries } from "../utils/Countries";

export default function SideMenu({ setSrc }) {
  const screenWidth = window.innerWidth;
  const navigate = useNavigate();

  const handleChangeSrc = (e) => {
    setSrc(e.target.value);
    navigate(`/country/${e.target.id}`);
  };

  return (
    <>
      <aside className="side-menu">
        {countries.map((country) => {
          return (
            <div className="side-menu-box" key={country.id}>
              <button
                className="side-menu-button"
                value={country.api}
                id={country.short}
                onClick={handleChangeSrc}
              >
                <img src={country.flag} className="side-menu-flag" />{" "}
                {screenWidth > 960 ? country.country : country.short}
              </button>
            </div>
          );
        })}
      </aside>
    </>
  );
}
