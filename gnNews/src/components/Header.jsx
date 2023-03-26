import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/GNnews.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDisplayType } from "../utils/Slice";

export default function Header() {
  const [pop, setPop] = useState({ display: "none" });
  const [closePop, setClosePop] = useState(false);

  const popupRef = useRef();
  const buttonRef = useRef();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleDisplayTypeChange = (newDisplayType) => {
    dispatch(setDisplayType(newDisplayType));
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, [pop]);

  const handleClick = () => {
    navigate("/");
  };

  const handleShowPopup = () => {
    setPop({ display: "block" });
    setClosePop(true);
  };

  const handleClosePopup = () => {
    setPop({ display: "none" });
    setClosePop(false);
  };

  const handleClickOutside = (e) => {
    if (
      !popupRef.current.contains(e.target) &&
      closePop &&
      !buttonRef.current.contains(e.target)
    ) {
      handleClosePopup();
    }
  };

  const handleChange = (e) => {
    handleDisplayTypeChange(e.target.value);
  };

  return (
    <>
      <div className="header">
        <img src={logo} className="header-logo" onClick={handleClick} />
        <div className="header-view-box">
          <label>Widok:</label>
          <select className="header-view" onChange={handleChange}>
            <option value="list">lista</option>
            <option value="tiles">kafelki</option>
          </select>
        </div>
        <button
          className="header-popup-button"
          title="Click me!"
          onClick={handleShowPopup}
          ref={buttonRef}
        >
          <i className="fa-regular fa-face-surprise"></i>
        </button>
      </div>
      <div style={pop} className="popup" ref={popupRef}>
        <h1>popup title</h1>
        <h3>popup short text</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum
          voluptatum ipsum aperiam doloribus pariatur alias maiores rem ea
          provident quibusdam totam beatae eum recusandae fugiat nisi commodi
          odit quisquam tempora nemo odio voluptatibus ex fuga, est
          reprehenderit! Porro libero consequatur corporis, dicta facere enim ab
          quasi consectetur atque deserunt. Officia neque illum, at voluptas
          atque optio natus numquam, deserunt perspiciatis quae sapiente dolores
          sint debitis ratione est quam, reprehenderit labore! Ipsum beatae,
          provident saepe voluptate eveniet tenetur culpa esse nihil obcaecati
          dolorum laudantium alias cumque exercitationem consequuntur
          laboriosam. Autem labore necessitatibus vero veniam modi. Ipsum
          maiores ducimus ea dolorum provident!
        </p>
        <button onClick={handleClosePopup} className="popup-close-button">
          Zamknij
        </button>
      </div>
    </>
  );
}
