import React from "react";

import Card from "../Comp/Card";
import Hero from "../Comp/Hero";
import BookFeature from "../Comp/BookFeature";
import Items from "../Comp/Items";
import MoreBooks from "../Comp/MoreBooks";

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <BookFeature />
      <Items />
      <MoreBooks />
    </div>
  );
};

export default Home;
