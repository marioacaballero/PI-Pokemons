import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { getPokemons } from "../../actions/allPokeActions";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";

function Home() {
  const dispatch = ReactRedux.useDispatch();
  const [currentPage, setCurrentPage] = useState(0);
  const [order, setOrder] = useState("");

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const pokemons = ReactRedux.useSelector((state) => state.pokemons.pokemons);

  const pokePage = () => {
    return pokemons.slice(currentPage, currentPage + 12);
  };

  return (
    <div>
      <h1>Home</h1>
      <Filters setOrder={setOrder} />

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
      <Pagination
        pokemons={pokemons.length}
        pokePage={pokePage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;