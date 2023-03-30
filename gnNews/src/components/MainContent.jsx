import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Article from "./Article";

export default function MainContent({ setArticlesCount }) {
  const [data, setData] = useState(null);
  const { id } = useParams();

  const newsKey = import.meta.env.VITE_NEWS_KEY;

  const getNews = async () => {
    const response = await fetch(
      id
        ? `https://newsapi.org/v2/top-headlines?country=${id}&pageSize=50&apiKey=${newsKey}`
        : `https://newsapi.org/v2/top-headlines?country=us&pageSize=50&apiKey=${newsKey}`
    );
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
  }, [id]);

  return (
    <div className="bg">
      <main className="articles">
        {data && <Article articles={data.articles} />}
      </main>
    </div>
  );
}
