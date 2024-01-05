import React, { useState } from "react";
import SearchBar from "../SearchBar";
import Featured from "./HomeComponents/1Com_Featured";
import CardCarousel from "./HomeComponents/3Com_CardCarousel";
import Categories from "./HomeComponents/2Com_Categories";
import TextCard from "./HomeComponents/4Com_TextCard";
import TextCard5thCom from "./HomeComponents/5Com_TextCard";
import TextCard6th from "./HomeComponents/6Com_TextCard";
import ImageCard7th from "./HomeComponents/7Com_ImageCard";
import ImageCard8th from "./HomeComponents/8Com_ImageCard";
import ProductStructure from "../Products/ProductStructure";

const Home = () => {
   
  return (
    <div
      style={{
        backgroundColor: "#F2F4F3",
        overflow: "hidden",
        paddingTop: "90px",
      }}
    >
      <div className="mb-4"><SearchBar /></div>
       <h3 className="mx-5"><b>All Featured</b></h3>
      <Categories/>
      <CardCarousel />
      <TextCard />
      <ProductStructure discount={5}/>
      <TextCard5thCom />
      <TextCard6th />
      <ProductStructure discount={5}/>
      <ImageCard7th />
      <ImageCard8th />
    </div>
  );
};

export default Home;
