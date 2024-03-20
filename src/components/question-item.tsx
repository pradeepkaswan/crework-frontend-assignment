type QuestionItemProps = {
  title: string
  tags: string[]
}
export const QuestionItem = ({ title, tags }: QuestionItemProps) => {
  return (
    <li className="flex flex-col gap-2 mb-4">
      <p className="font-semibold font-poppins text-[18px]">{title}</p>
      <div className="flex gap-4 font-normal font-inter text-[14px] text-[#BDBCBC]">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </li>
  )
}
