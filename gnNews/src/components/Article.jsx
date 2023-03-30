import React, { useState } from "react";
import PopupWindow from "./PopupWindow";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Article({ articles }) {
  const [popup, setPopup] = useState({ display: "none" });
  const [id, setId] = useState(null);
  const { displayType, styles } = useSelector((state) => state.display);

  const handleShow = (e) => {
    setPopup({ display: "block" });
    setId(e.target.id);
  };

  const { t } = useTranslation();

  return (
    <>
      <div className="articles-box">
        {articles.map((article, idx) => {
          return (
            <div
              className="articles-single"
              key={article.title}
              style={styles[displayType]}
            >
              {article.urlToImage && displayType === "tiles" ? (
                <img src={article.urlToImage} className="articles-photo" />
              ) : null}
              <div className="articles-content">
                <h4>{article.title}</h4>
                <div className="articles-author-and-time-box">
                  <p>
                    {article.source.id
                      ? article.source.id
                      : article.source.name}
                  </p>
                  <p>
                    {article.publishedAt.substring(0, 10)}{" "}
                    {article.publishedAt.substring(11, 16)}
                  </p>
                </div>
                {article.description && displayType === "tiles" ? (
                  <p>{article.description}</p>
                ) : null}
                <button
                  id={idx}
                  onClick={handleShow}
                  className="popup-close-button"
                >
                  {t("Read")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {id && (
        <PopupWindow
          photo={articles[id].urlToImage}
          title={articles[id].title}
          author={articles[id].author}
          source={articles[id].source.name}
          publishedAt={articles[id].publishedAt}
          description={articles[id].description}
          content={articles[id].content}
          url={articles[id].url}
          popup={popup}
          setPopup={setPopup}
        />
      )}
    </>
  );
}
