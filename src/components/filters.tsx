type FilterProps = {
  allTags: Set<string>
  filter: string
  setFilter: (filter: string) => void
}

export const Filter = ({ allTags, filter, setFilter }: FilterProps) => {
  return (
    <div className="flex flex-wrap gap-4 mb-4">
      <button
        className={`${
          filter === "All" ? "bg-white text-black" : "bg-transparent text-white"
        }`}
        onClick={() => setFilter("All")}
      >
        All
      </button>
      {Array.from(allTags).map((tag) => (
        <button
          key={tag}
          className={`${
            filter === tag ? "bg-white text-black" : "bg-transparent text-white"
          }`}
          onClick={() => {
            setFilter(tag)
          }}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
