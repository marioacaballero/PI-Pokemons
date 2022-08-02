import React from "react";
import styles from "./Pagination.module.css";

function Pagination({ currentPage, setCurrentPage, pokePage, pokemons }) {
  const pageNumber = [];
  for (let i = 0; i < Math.ceil(pokemons / 12); i++) {
    pageNumber.push(i + 1);
  }

  const changeTo = (number) => {
    setCurrentPage((number - 1) * 12);
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

  //Estilo
  const styPrev = () => {
    if (currentPage === 0) {
      return "none";
    }
  };
  //Estilo
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
        >
          NEXT
        </button>
      </div>
    </div>
  );
}

export default Pagination;
