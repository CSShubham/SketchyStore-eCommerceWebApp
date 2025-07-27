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
    <div className="border-0 p-2 sm:p-4 w-full">
      <div className="pagination-controls flex  sm:justify-between sm:gap-4 gap-5  items-center border-0 mr-15 ml-15">
        <button
          className="px-2 py-1 sm:px-3 sm:py-2 border-1 text-sm sm:text-base rounded-xl flex items-center text-white bg-[#0e0b0b] active:text-[#FF735C] active:bg-white"
          onClick={handleBack}
          disabled={page === 1}
        >
          {" "}
          &larr; Back{" "}
        </button>

        <button
          className="px-2 py-1 sm:px-3 sm:py-2 border-1  text-sm sm:text-base rounded-xl flex items-center text-white bg-[#111110] active:text-[#FF735C] active:bg-white"
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
