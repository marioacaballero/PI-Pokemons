import React from "react";
import { Link } from "react-router-dom";

function LandinPage() {
  return (
    <div>
      LandinPage
      <Link to={"/home"}> Home </Link>
    </div>
  );
}

export default LandinPage;
