import React from "react";
import "../MainPage/MainPage.css";

const MainPage = () => {
  return (
    <div className="container">
      <div className="first-photo">
        <img
          style={{ width: "100%", marginTop: "50px" }}
          src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw5b6f3822/homepage/2022/HP-April-2022/WW22_PUSH%20HP_HERO-MODULE-2560x996_1%20(1).jpg"
          alt=""
        />
      </div>

      <div className="text-1">
        <h2 style={{ fontSize: "30px" }}>WATCHES AND WONDERS 2022</h2>
        <p style={{ fontSize: "20px" }}>
          Unveiling the latest innovations in Geneva and new vision of
          watchmaking and time itself
        </p>
        <p style={{ textDecoration: "underline", fontSize: "20px" }}>
          View the novelties
        </p>
      </div>
      <div className="second-block-a">
        <div>
          <img
            style={{ width: "100%", height: "85%" }}
            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dwcfaf5a05/homepage/2022/HP-April-2022/02_TANK.jpg"
            alt=""
          />
          <h2 style={{ fontSize: "30px" }}>TANK</h2>
          <p style={{ fontSize: "18px" }}>
            A design legend in the world of watchmaking: exceptional form meets
            timeless elegance
          </p>
          <p style={{ textDecoration: "underline", fontSize: "20px" }}>
            Shop the collection
          </p>
        </div>
        <div>
          <img
            style={{ width: "85%", height: "85%" }}
            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw3c308497/homepage/2022/HP-April-2022/Santos_SP1.png"
            alt=""
          />
          <h2 style={{ fontSize: "30px" }}>SANTOS DE CSRTIER</h2>
          <p style={{ fontSize: "18px" }}>
            An icon with a pioneering spirit: precise proportions take flight
            with powerful details.
          </p>
          <p style={{ textDecoration: "underline", fontSize: "20px" }}>
            Shop the collection
          </p>
        </div>
      </div>
      <div>
        <img
          style={{ width: "100%", marginTop: "100px" }}
          src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dwd0eb19bb/homepage/2022/HP-April-2022/05_2560x996_Panth%C3%A8re%20fig.jpg"
          alt=""
        />
      </div>
      <div>
        <h2 style={{ fontSize: "30px" }}>PANTHÈRE DE CARTIER</h2>
        <p style={{ fontSize: "20px" }}>
          Magnetic, powerful, wild: Hear the emblem of the Maison roar.
        </p>
        <p style={{ textDecoration: "underline", fontSize: "20px" }}>
          Shop the collection
        </p>
      </div>
      <div className="third-block-a">
        <div>
          <img
            style={{ width: "95%", height: "85%" }}
            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw1e942864/homepage/2022/HP-April-2022/06LOVE.jpg"
            alt=""
          />
          <h2 style={{ fontSize: "30px" }}>LOVE</h2>
          <p style={{ fontSize: "20px" }}>How far would you go for love?</p>
          <p style={{ textDecoration: "underline", fontSize: "20px" }}>
            Shop the collection
          </p>
        </div>
        <div>
          <img
            style={{ width: "95%", height: "85%" }}
            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw213c8e6d/homepage/2022/HP-April-2022/07_JUC.jpg"
            alt=""
          />
          <h2 style={{ fontSize: "30px" }}>JUSTE UN CLOU</h2>
          <p style={{ fontSize: "20px" }}>
            A simple nail transformed into an exquisite object
          </p>
          <p style={{ textDecoration: "underline", fontSize: "20px" }}>
            Shop the collection
          </p>
        </div>
      </div>
      <div className="fourth-block-a">
        <div>
          <img
            style={{ width: "95%", height: "85%" }}
            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw744efba0/homepage/HP-EOY-2021/8_GAO_PUSH_NEL_1680X1377.jpg"
            alt=""
          />
          <h2 style={{ fontSize: "30px" }}>THE GREAT ANIMAL ORCHESTRA</h2>
          <p style={{ fontSize: "20px" }}>Now trough May 22nd</p>
          <p style={{ textDecoration: "underline", fontSize: "20px" }}>
            About the Exhibition
          </p>
        </div>
        <div>
          <img
            style={{ width: "95%", height: "85%" }}
            src="https://www.cartier.com/on/demandware.static/-/Library-Sites-CartierSharedLibrary-BGTJ/default/dw8277fb31/homepage/2022/HP-April-2022/09_CARTIER_SERVICES_1680X1377PX7.jpg"
            alt=""
          />
          <h2 style={{ fontSize: "30px" }}>BOOK A PERSONALISED APPOINTMENT</h2>
          <p style={{ textDecoration: "underline", fontSize: "20px" }}>
            Select your boutique
          </p>
        </div>
      </div>

      <div className="line-a"></div>

      <div className="subscribe-a">
        <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
        <input type="text" placeholder="Email" />

        <button id="btn-subscribe-a">Subscribe</button>
      </div>
    </div>
  );
};

export default MainPage;
