import React from "react";
import * as ReactRedux from "react-redux";
import { cleanPokeDetail, getPokemonDetail } from "../../actions/pokeActions";
import { handleSound } from "../Auxiliaries/Auxiliaries";
import style from "./CardDetail.module.css";
import LoadingForDet from "./Loading/LoadingForDet";

function CardDetail(props) {
  const id = props.match.params.id;
  // console.log(props.location.pathname);
  const dispatch = ReactRedux.useDispatch();

  React.useEffect(() => {
    dispatch(getPokemonDetail(id));
    return () => {
      dispatch(cleanPokeDetail(dispatch));
    };
  }, [dispatch, id]);

  const pokemon = ReactRedux.useSelector((state) => state.pokemon.pokemon);
  // console.log(pokemon);

  return (
    <div>
      {pokemon.length > 0 ? (
        <div className={style.main}>
          <img
            alt={pokemon[0].name}
            src={pokemon[0].img}
            className={style.img}
          />
          <div className={style.allstats}>
            <section>
              <h4>
                <h4>ID</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>{pokemon[0].id}</p>
            </section>
            <section>
              <h4>
                <h4>NAME</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>{pokemon[0].name.toUpperCase()}</p>
            </section>
            <section>
              <h4>
                <h4>TYPES</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>
                {pokemon[0].types
                  .map((typ) => typ.name.toUpperCase())
                  .join(", ")}
              </p>
              {/* {pokemon[0].types.map((typ, i) => (
                <img
                  key={i}
                  alt={typ.name}
                  src={typ.img}
                  className={style.typeImg}
                />
              ))} */}
            </section>
            <section>
              <h4>
                <h4>HP</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>{pokemon[0].hp}</p>
            </section>
            <section>
              <h4>
                <h4>ATTACK</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>{pokemon[0].attack}</p>
            </section>
            <section>
              <h4>
                <h4>DEFENSE</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>{pokemon[0].defense}</p>
            </section>
            <section>
              <h4>
                <h4>SPEED</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>{pokemon[0].speed}</p>
            </section>
            <section>
              <h4>
                <h4>WEIGHT</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>{pokemon[0].weight}</p>
            </section>
            <section>
              <h4>
                <h4>HEIGHT</h4>
                <h5></h5>
              </h4>
              <p onMouseEnter={handleSound}>{pokemon[0].height}</p>
            </section>
          </div>
        </div>
      ) : (
        <LoadingForDet />
      )}
      {pokemon.length > 0 ? <div className={style.botDiv}></div> : <div></div>}
    </div>
  );
}

export default CardDetail;
