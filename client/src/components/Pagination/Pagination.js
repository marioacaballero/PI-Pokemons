import React from "react";

function Pagination({ currentPage, setCurrentPage, pokePage, pokemons }) {
  const pageNumber = [];
  for (let i = 1; i < Math.ceil(pokemons / 12); i++) {
    pageNumber.push(i);
  }

  const changeTo = (number) => {
    setCurrentPage(number * 12);
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
    <div>
      <button onClick={previous} style={{ display: styPrev() }}>
        Previous
      </button>
      <>
        {pageNumber.map((num) => (
          <button key={num} onClick={() => changeTo(num)}>
            {num}
          </button>
        ))}
      </>
      <button onClick={next} style={{ display: styNext() }}>
        Next
      </button>
    </div>
  );
}

export default Pagination;
