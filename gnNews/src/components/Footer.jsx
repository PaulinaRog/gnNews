import React from "react";

export default function Footer({ articlesCount }) {
  // setInterval(function () {
  //   myTimer();
  // }, 1000);

  // function myTimer() {
  //   const d = new Date();
  //   document.getElementById("clock").innerHTML = d.toLocaleTimeString();
  // }

  return (
    <footer className="footer">
      <p>Wyświetlanych artykułów: {articlesCount}</p>
      <p id="clock"></p>
    </footer>
  );
}
