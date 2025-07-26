const Pagination = ({ page, setPage }) => {
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const handleBack = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };
  return (
    <div className="border-0 p-4">
      <div className="pagination-controls flex  justify-between  border-0 mr-15 ml-15">
        <button
          className="px-3 py-2 border-1 rounded-xl flex items-center text-white bg-[#0e0b0b] active:text-[#FF735C] active:bg-white"
          onClick={handleBack}
          disabled={page === 1}
        >
          {" "}
          &larr; Back{" "}
        </button>

        <button
          className="px-3 py-2 border-1 rounded-xl flex items-center text-white bg-[#111110] active:text-[#FF735C] active:bg-white"
          onClick={handleNext}
        >
          {" "}
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
