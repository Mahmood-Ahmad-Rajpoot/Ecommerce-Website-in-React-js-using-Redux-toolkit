import React, { useEffect, useState } from "react";
import "./Main.css";
import Footer from "../Footer";
import Header from "../Header";
import CenterComponent from "../CenterComponent";
import {
  pagesHeadings,
  pagesParagraphs,
  pagesImages,
} from "./DataSuggestionPages";
import SuggestionSkeleton from "../SuggestionSkeleton";
const ChooseProduct = () => {
  const [page, Setpage] = useState(1);
  // skeleton view
  const [showSkel, setShowSkel] = useState(true);
  setTimeout(() => {
    setShowSkel(false);
  }, 4000);

  console.log(page);
  let image = pagesImages[page - 1];
  let paragraph = pagesParagraphs[page - 1];
  let heading = pagesHeadings[page - 1];

  const pageHandler = (e) => {
    if (e === 1) {
      if (page == parseInt(pagesHeadings.length)) {
        return;
      } else {
        Setpage(page + 1);
      }
    } else {
      Setpage(page - 1);
    }
  };
  let circle = "pageCircle";
  return (
    <>
      {showSkel ? (
        <SuggestionSkeleton />
      ) : (
        <div
          className="ChooseProductMainDiv d-flex flex-column
      position-relative "
        >
          <Header page={page} quantity={pagesHeadings.length} />
          <CenterComponent
            image={image}
            paragraph={paragraph}
            heading={heading}
          />
          <Footer
            page={page}
            pageHandler={pageHandler}
            circle={circle}
            pagesHeadings={pagesHeadings}
          />
        </div>
      )}
    </>
  );
};

export default ChooseProduct;
