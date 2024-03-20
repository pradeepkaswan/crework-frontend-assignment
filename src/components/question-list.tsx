import { useState } from "react"
import { Filter } from "./filters"
import data from "../data/questions.json"
import { QuestionItem } from "./question-item"
import { Pagination } from "./pagination"

export const QuestionList = () => {
  const [filter, setFilter] = useState<string>("All")
  const [currentPage, setCurrentPage] = useState<number>(1)

  const itemsPerPage = 10
  const allTags = new Set(data.questions.flatMap((question) => question.tags))

  const filteredQuestions =
    filter === "All"
      ? data.questions
      : data.questions.filter((question) => question.tags.includes(filter))

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = filteredQuestions.slice(
    indexOfFirstItem,
    indexOfLastItem
  )

  return (
    <div className="flex flex-col md:min-w-28 md:ml-28">
      <h1 className="font-bold md:text-[36px] mb-3 text-[28px] font-red-hat-display bg-gradient-to-b from-[#FFFFFF] to-[#FAAF3E] bg-clip-text text-transparent inline-block">
        Product Management Interview Questions
      </h1>
      <p className="font-poppins font-normal text-[14px] md:text-[16px] mb-4">
        Browse 1000+ questions from top tech companies
      </p>
      <Filter allTags={allTags} filter={filter} setFilter={setFilter} />
      <div>
        {currentItems.map((question) => (
          <QuestionItem
            key={question.title}
            title={question.title}
            tags={question.tags}
          />
        ))}
      </div>
      <div className="flex justify-end md:mr-28">
        <Pagination
          totalItems={filteredQuestions.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  )
}
