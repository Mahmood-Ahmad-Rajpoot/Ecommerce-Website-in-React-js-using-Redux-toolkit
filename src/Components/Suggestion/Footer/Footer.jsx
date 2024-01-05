import React from "react";
import "./Footer.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = ({ page, pageHandler, circle, pagesHeadings }) => {
  return (
    <div
      className="NextPrevPageDiv w-100
         d-flex  position-absolute align-self-start
        flex-row justify-content-between 
         "
    >
      {page === 1 ? (
        <div></div>
      ) : (
        <Button
          sx={{ color: "black", fontWeight: "700" }}
          onClick={() => pageHandler(0)}
        >
          Prev
        </Button>
      )}

      <div className="CirclesParentDiv d-flex gap-1 justify-content-center align-items-center  ">
        {pagesHeadings.map((circ, ind) => {
          if (ind === page - 1) return <div className="elipse "></div>;
          return <div className={circle}></div>;
        })}
      </div>
      {page === pagesHeadings.length ? (
        <Link to={"/homePage"}>
          <Button color="error" sx={{ fontWeight: "700" }}>
            <b>Get Started</b>
          </Button>
        </Link>
      ) : (
        <>
          {" "}
          <Button
            color="error"
            sx={{ fontWeight: "700" }}
            onClick={() => pageHandler(1)}
          >
            Next
          </Button>
        </>
      )}
    </div>
  );
};

export default Footer;
