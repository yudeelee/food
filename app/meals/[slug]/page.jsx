import React from "react";

const Meals = ({ params }) => {
  return (
    <main>
      <h1>{params.slug}</h1>
    </main>
  );
};

export default Meals;
