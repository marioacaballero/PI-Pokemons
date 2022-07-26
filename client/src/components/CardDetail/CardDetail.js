import React from "react";
import * as ReactRedux from "react-redux";
import { cleanPokeDetail, getPokemonDetail } from "../../actions/pokeActions";
import { capFirstLet } from "../Auxiliaries/Auxiliaries";

function CardDetail(props) {
  const id = props.match.params.id;
  // console.log(id);
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
      CardDetail
      {pokemon.length > 0 ? (
        <>
          <h1>{capFirstLet(pokemon[0].name)}</h1>
          <p>Attack: {pokemon[0].attack}</p>
          <p>Defense: {pokemon[0].defense}</p>
          <p>HP: {pokemon[0].hp}</p>
          <p>Weigth: {pokemon[0].weight}</p>
        </>
      ) : (
        <h1>"Loading..."</h1>
      )}
    </div>
  );
}

export default CardDetail;
