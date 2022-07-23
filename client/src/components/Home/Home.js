import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { getPokemons } from "../../actions/actions";
import Card from "../Card/Card";
import NavBar from "../NavBar/NavBar";

function Home() {
  const dispatch = ReactRedux.useDispatch();
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const pokemons = ReactRedux.useSelector((state) => state.pokemons);

  const pokePage = () => {
    return pokemons.slice(currentPage, currentPage + 12);
  };

  const next = () => {
    if (pokePage().length % 12 === 0) {
      setCurrentPage(currentPage + 12);
    }
  };

  const previous = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 12);
    }
  };

  const styPrev = () => {
    if (currentPage === 0) {
      return "none";
    }
  };

  const styNext = () => {
    if (pokePage().length % 12 !== 0) {
      return "none";
    }
  };

  return (
    <div>
      <h1>Home</h1>
      <NavBar />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          justifyItems: "center",
          gap: "2rem",
          padding: "2rem",
        }}
      >
        {pokemons.length > 0 ? (
          pokePage().map((pok) => (
            <Card
              key={pok.id}
              name={pok.name}
              img={pok.img}
              id={pok.id}
              types={pok.types}
            />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
      <button onClick={previous} style={{ display: styPrev() }}>
        Previous
      </button>
      <label> Page: {currentPage / 12 + 1} </label>
      <button onClick={next} style={{ display: styNext() }}>
        Next
      </button>
    </div>
  );
}

export default Home;
