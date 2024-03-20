type PaginationProps = {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

export const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage)
  const maxPagesVisible = 5
  const halfMaxPagesVisible = Math.floor(maxPagesVisible / 2)

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage + 1

  const renderPageNumbers = () => {
    const pageNumbers = []

    // previous button
    if (currentPage > 1) {
      pageNumbers.push(
        <button
          className="bg-[#FAAF3D] text-black border-none"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>
      )
    }

    // first page
    if (totalPages > maxPagesVisible && currentPage > halfMaxPagesVisible + 1) {
      pageNumbers.push(<button onClick={() => setCurrentPage(1)}>1</button>)
      pageNumbers.push(<span className="px-2">...</span>)
    }

    // middle pages
    const startPage = Math.max(
      currentPage - halfMaxPagesVisible,
      totalPages > maxPagesVisible ? 2 : 1
    )
    const endPage = Math.min(
      currentPage + halfMaxPagesVisible,
      totalPages - (totalPages > maxPagesVisible ? 1 : 0)
    )
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`${
            i === currentPage
              ? "border-[#FAAF3D] text-[#FAAF3D]"
              : "border-white text-white"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      )
    }

    // last page
    if (
      totalPages > maxPagesVisible &&
      currentPage < totalPages - halfMaxPagesVisible
    ) {
      pageNumbers.push(
        <span key="ellipsis" className="px-2">
          ...
        </span>
      )
      pageNumbers.push(
        <button onClick={() => setCurrentPage(totalPages)}>{totalPages}</button>
      )
    }

    // next button
    if (currentPage < totalPages) {
      pageNumbers.push(
        <button
          className="bg-[#FAAF3D] text-black border-none"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      )
    }
    return pageNumbers
  }
  return (
    <div className="flex flex-row items-center gap-6">
      <div className="hidden md:block">
        Showing {indexOfFirstItem}-
        {indexOfLastItem > totalItems ? totalItems : indexOfLastItem} of{" "}
        {totalItems} questions
      </div>
      <div className="flex gap-4">{renderPageNumbers()}</div>
    </div>
  )
}
