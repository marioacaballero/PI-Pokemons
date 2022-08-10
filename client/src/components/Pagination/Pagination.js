import React from "react";
import { handleSound } from "../Auxiliaries/Auxiliaries";
import styles from "./Pagination.module.css";

function Pagination({ currentPage, setCurrentPage, pokePage, pokemons }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(pokemons / 12); i++) {
    pageNumber.push(i + 1);
  }

  const changeTo = (number) => {
    setCurrentPage((number - 1) * 12);
  };

  const page = (num) => {
    if (currentPage / 12 === num - 1) {
      return "#f13a3a";
    }
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

  //Style btn
  const styPrev = () => {
    if (currentPage === 0) {
      return "none";
    }
  };
  //Style btn
  const styNext = () => {
    if (pokePage().length % 12 !== 0) {
      return "none";
    }
  };

  return (
    <div className={styles.pagination}>
      <div>
        <button
          onClick={previous}
          className={styles.btnT}
          style={{ display: styPrev() }}
          onMouseDown={handleSound}
          onMouseEnter={handleSound}
        >
          PREV
        </button>
      </div>
      <div className={styles.numbers}>
        {pageNumber.map((num) => (
          <button
            key={num}
            onClick={() => changeTo(num)}
            className={styles.number}
            style={{ backgroundColor: page(num) }}
            onMouseDown={handleSound}
            onMouseEnter={handleSound}
          >
            {num}
          </button>
        ))}
      </div>
      <div>
        <button
          onClick={next}
          className={styles.btnB}
          style={{ display: styNext() }}
          onMouseDown={handleSound}
          onMouseEnter={handleSound}
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Pagination;
