import React from "react";
import { useTranslation } from "react-i18next";

export default function PopupWindow({
  photo,
  author,
  title,
  url,
  publishedAt,
  content,
  popup,
  setPopup,
  source,
}) {
  const handleClose = () => {
    setPopup({ display: "none" });
  };

  const { t } = useTranslation();

  return (
    <div className="popup" style={popup}>
      {photo ? <img src={photo} className="articles-photo" /> : null}
      <div>
        <h4>{title}</h4>
        <div className="articles-author-and-time-box">
          <p>{author ? author : source}</p>
          <p>
            {publishedAt.substring(0, 10)} {publishedAt.substring(11, 16)}
          </p>
        </div>
        {content ? (
          <>
            <p>{content.substring(0, 200)}</p>
            <div className="articles-link-box">
              <p>{t("readFull")}:</p>
              <a href={`${url}`}>{t("Read")}</a>
            </div>
          </>
        ) : (
          <>
            <div className="articles-link-box">
              <p>{t("contentError")}: </p>
              <a href={`${url}`}>{t("Read")}</a>{" "}
            </div>
          </>
        )}
        <button onClick={handleClose} className="popup-close-button">
          {t("Close")}
        </button>
      </div>
    </div>
  );
}
