import React from "react";
import "./News.css";

const News = () => {
  return (
    <div>
      <div>
        <img
          style={{ width: "100%" }}
          src="https://cdn.occtoo.com/cartier/magazine-media/oscars_HERO_v2.jpg"
          alt=""
        />
        <h1
          style={{
            fontSize: "30px",
            marginTop: "5px",
          }}
        >
          MAKING AN APPERANCE AT THE 93rd ACADEMY AWARDS
        </h1>
      </div>

      <div style={{ marginTop: "40px" }}>
        <h2>LATEST STORIES</h2>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
        }}
      >
        <div>
          <img
            // style={{ width: "60%", marginRight: "20px" }}
            src="https://cdn.occtoo.com/cartier/magazine-media/Coussin_de_Cartier_SQUARE.jpg"
            alt=""
          />
          <p>
            FROM BEJEWELED TO BOUNCING, THE COUSSIN WATCHES CAUSE A SENSATION
          </p>
        </div>
        <div>
          <img
            // style={{ width: "70%", marginLeft: "15px" }}
            src="https://cdn.occtoo.com/cartier/magazine-media/Panthere_de_Cartier_SF_SQUARE.jpg"
            alt=""
          />
          <p>3 THINGS TO KNOW: THE PANTERE DE CAERIER BAG</p>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "50px",
        }}
      >
        <div>
          <img
            // style={{ width: "60%", marginRight: "20px" }}
            src="https://cdn.occtoo.com/cartier/magazine-media/Panth%C3%A8re_de_Cartier_SQUARE.jpg"
            alt=""
          />
          <p> LILY COLLINS: A PANTHERE WOMAN</p>
        </div>
        <div>
          <img
            // style={{ width: "70%", marginLeft: "15px" }}
            src="https://cdn.occtoo.com/cartier/magazine-media/NOA_Red_SQUARE.jpg"
            alt=""
          />
          <p>HOW THE MAISON GIVES A SECOND LIFE TO ITS MATERIALS</p>
        </div>
      </div>

      <div>
        <img
          style={{ width: "92%", marginTop: "20px" }}
          src="https://cdn.occtoo.com/cartier/magazine-media/beautiful-creatures_LONGPUSH.png"
          alt=""
        />
        <h3 style={{ fontSize: "20px", marginTop: "5px" }}>
          BEAUTIFUL CREATURES: CARTIER AT THE AMERICAN MUSEUM OF NATURAL HISTORY
          IN NEW YORK
        </h3>
      </div>
    </div>
  );
};

export default News;
