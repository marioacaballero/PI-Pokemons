import React, { useEffect, useState } from "react";
import * as ReactRedux from "react-redux";
import { getPokemons } from "../../actions/allPokeActions";
import Card from "../Card/Card";
import Filters from "../Filters/Filters";
import Loading from "../Loading/Loading";
import Pagination from "../Pagination/Pagination";
import style from "./Home.module.css";

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
      {pokemons.length > 0 ? <Filters setOrder={setOrder} /> : <div></div>}
      <div className={style.pokemons}>
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
          <Loading className={style.poke} />
        )}
      </div>
      {pokemons.length > 0 ? (
        <Pagination
          pokemons={pokemons.length}
          pokePage={pokePage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Home;
