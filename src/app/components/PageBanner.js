/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function PageBanner({
  title,
  image = "/kids.jpeg"
}) {
  return (
    <section
      className="text-center"
      style={{
        paddingTop: "90px",
      }}
    >
      <div className="container">
        <h1
          className="fw-bold mb-4"
          style={{
            color: "#FFD93D",
            fontSize: "clamp(2rem, 5vw, 4rem)",
          }}
        >
          {title}
        </h1>
      </div>

      <img
        src={image}
        alt={title}
        className="img-fluid w-100"
      />
    </section>
  );
}