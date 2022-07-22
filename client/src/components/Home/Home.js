import React, { useEffect } from "react";
import * as ReactRedux from "react-redux";
import { getPokemons } from "../../actions/actions";
import Card from "../Card/Card";

function Home() {
  const dispatch = ReactRedux.useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);

  const pokemons = ReactRedux.useSelector((state) => state.pokemons);

  return (
    <div>
      Home
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          justifyItems: "center",
          gap: "2rem",
        }}
      >
        {pokemons.length > 0 ? (
          pokemons.map((pok) => (
            <Card key={pok.id} name={pok.name} img={pok.img} id={pok.id} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  );
}

export default Home;
