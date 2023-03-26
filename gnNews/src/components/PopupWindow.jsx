import React, { useEffect, useRef, useState } from "react";

export default function PopupWindow({
  photo,
  author,
  title,
  url,
  publishedAt,
  description,
  content,
  popup,
  setPopup,
  source,
}) {
  const handleClose = () => {
    setPopup({ display: "none" });
  };

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
              <p>Przeczytaj cały artykuł tutaj:</p>
              <a href={`${url}`}>Czytaj</a>
            </div>
          </>
        ) : (
          <>
            <div className="articles-link-box">
              <p>
                Niestety nie udało się pobrać treści. Żeby przeczytać artykuł,
                kliknij:{" "}
              </p>
              <a href={`${url}`}>Czytaj</a>{" "}
            </div>
          </>
        )}
        <button onClick={handleClose} className="popup-close-button">
          Zamknij
        </button>
      </div>
    </div>
  );
}
