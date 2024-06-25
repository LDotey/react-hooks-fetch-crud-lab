import React, {useEffect, useState} from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestions}) {

  function handleDelete(deletedQuestion) {
    const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
    setQuestions(updatedQuestions)
  }

  // function handleAnswerChange(newIndex) {
  //   fetch(`http://localhost:4000/questions/${question.id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify({ correctIndex: parseInt(newIndex) }),
  //   })
  //   .then(() => {
  //     setQuestions((questions) => questions.map((question) => question.id ? {...question, correctIndex: parseInt(newIndex)} : question))
  //   })

  // }

 
  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map((question) => (
        <QuestionItem 
        question={question}
        setQuestions={setQuestions}
        key={question.id}
        onDeleteItem={handleDelete}
        
        />
        
      // <li key={question.id}>{question.prompt}</li>
      ))}
      </ul> 
    </section>
  );
}

export default QuestionList;
