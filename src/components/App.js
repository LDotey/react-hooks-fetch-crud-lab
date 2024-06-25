import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/questions")
    .then((resp) => resp.json())
    .then((data) => setQuestions(data))
  }, [])

  const handleAddQuestion = (newQuestion) => {
    setQuestions(questions => [...questions, newQuestion])
    console.log("Added question")
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? 
      <QuestionForm onAddQuestion={handleAddQuestion}/> : 
      <QuestionList questions={questions} setQuestions={setQuestions}/>}
    </main>
  );
}

export default App;
