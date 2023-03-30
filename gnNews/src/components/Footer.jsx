import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Footer({ articlesCount }) {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const { t } = useTranslation();

  return (
    <footer className="footer">
      <p>
        {t("numberOfArticles")}: {articlesCount}
      </p>
      <p>
        {hours}:{minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </p>
    </footer>
  );
}
