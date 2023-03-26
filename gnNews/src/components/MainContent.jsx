import React, { useEffect, useState } from "react";
import Article from "./Article";

export default function MainContent({ src, setArticlesCount }) {
  const [data, setData] = useState(null);

  const getNews = async () => {
    const response = await fetch(src);
    if (!response.ok) {
      throw new Error("Data could not be fetched!");
    } else {
      return response.json();
    }
  };

  useEffect(() => {
    getNews()
      .then((res) => {
        setData(res);
        setArticlesCount(res.articles.length);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [src]);

  console.log(data);

  return (
    <main className="articles">
      {data && <Article articles={data.articles} />}
    </main>
  );
}
