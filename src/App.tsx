import { Footer } from "./components/sections/footer"
import { Header } from "./components/sections/header"
import { QuestionList } from "./components/question-list"

function App() {
  return (
    <div className="relative min-h-screen ">
      <Header />
      <div className="py-8 px-5 md:px-10 lg:px-24">
        <QuestionList />
      </div>
      <Footer />
    </div>
  )
}

export default App
