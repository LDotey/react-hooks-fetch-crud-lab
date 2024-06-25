import React from "react";

function QuestionItem({ question, setQuestions, onDeleteItem }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleAnswerChange (event) {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ correctIndex: parseInt(event.target.value)})
    })
    .then(() => {
      setQuestions((questions) => questions.map((question) => 
      question.id ? {...question, correctIndex: parseInt(event.target.value)} : question))
    })
    console.log(event.target.value)

  }

  function handleChange(event){
    console.log(event.target.value)

  }

  const handleDeleteClick = () => {
    fetch(`http://localhost:4000/questions/${question.id}`, {
      method:"DELETE",
    })
      .then((resp) => resp.json())
      .then(() => onDeleteItem(question))
  }
 

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={handleAnswerChange} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDeleteClick}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
