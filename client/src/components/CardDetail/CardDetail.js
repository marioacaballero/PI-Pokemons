import React from "react";
import * as ReactRedux from "react-redux";
import { cleanPokeDetail, getPokemonDetail } from "../../actions/pokeActions";
import { handleSound } from "../Auxiliaries/Auxiliaries";
import style from "./CardDetail.module.css";
import LoadingForDet from "./Loading/LoadingForDet";
import wild from "../Music/Pokemon FireRedLeafGreen Wild Pokemon Encounter.mp3";
import { typ } from "../Card copy/CSS Types/auxiliar";

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
        <audio autoPlay loop>
          <source src={wild} type="audio/mpeg" />
        </audio>
      ) : (
        <div></div>
      )}
      {pokemon.length > 0 ? (
        <div className={style.main}>
          <img
            alt={pokemon[0].name}
            src={pokemon[0].img}
            className={style.img}
          />
          <div className={style.allstats}>
            <section>
              <div className={style.h4m}>
                <div className={style.h4m}>ID</div>
                <div className={style.h5m}></div>
              </div>
              <p onMouseEnter={handleSound}>{pokemon[0].id}</p>
            </section>
            <section>
              <div className={style.h4m}>
                <div className={style.h4m}>NAME</div>
                <div className={style.h5m}></div>
              </div>
              <p onMouseEnter={handleSound}>{pokemon[0].name.toUpperCase()}</p>
            </section>
            <section>
              <div className={style.h4m}>
                <div className={style.h4m}>TYPES</div>
                <div className={style.h5m}></div>
              </div>
              <p onMouseEnter={handleSound}>
                {
                  pokemon[0].types.map((ty, i) => (
                    <span key={i} className={typ(ty.name)}>
                      {ty.name.toUpperCase()}
                    </span>
                  ))
                  // .join(" ")
                }
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
              <div className={style.h4m}>
                <div className={style.h4m}>HP</div>
                <div className={style.h5m}></div>
              </div>
              <p onMouseEnter={handleSound}>{pokemon[0].hp}</p>
            </section>
            <section>
              <div className={style.h4m}>
                <div className={style.h4m}>ATTACK</div>
                <div className={style.h5m}></div>
              </div>
              <p onMouseEnter={handleSound}>{pokemon[0].attack}</p>
            </section>
            <section>
              <div className={style.h4m}>
                <div className={style.h4m}>DEFENSE</div>
                <div className={style.h5m}></div>
              </div>
              <p onMouseEnter={handleSound}>{pokemon[0].defense}</p>
            </section>
            <section>
              <div className={style.h4m}>
                <div className={style.h4m}>SPEED</div>
                <div className={style.h5m}></div>
              </div>
              <p onMouseEnter={handleSound}>{pokemon[0].speed}</p>
            </section>
            <section>
              <div className={style.h4m}>
                <div className={style.h4m}>WEIGHT</div>
                <div className={style.h5m}></div>
              </div>
              <p onMouseEnter={handleSound}>{pokemon[0].weight}</p>
            </section>
            <section>
              <div className={style.h4m}>
                <div className={style.h4m}>HEIGHT</div>
                <div className={style.h5m}></div>
              </div>
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
