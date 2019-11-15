import React from "react";
import Routes from "../routes/Index";
import Header from "./Header";

export default props => {
  return(
    <div>
      <Header />
      { Routes }
    </div>
  )
};
