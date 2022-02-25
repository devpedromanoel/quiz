import type { NextPage } from 'next'
import { useState } from 'react';
import Question from '../components/Question'
import AnswerModel from '../model/answer';
import QuestionModel from '../model/question'

const exampleMock = new QuestionModel(1, "Some question?", [
  AnswerModel.incorrect('answer 1'),
  AnswerModel.incorrect('answer 2'),
  AnswerModel.incorrect('answer 3'),
  AnswerModel.correct('answer 4'),
], false);


const Home: NextPage = () => {
  const [question, setQuestion] = useState(exampleMock);

  function onResponse(index: number) {
    setQuestion(question.replyWith(index));
    console.log(index);
  }

  return (
    <div style={{
      display: 'flex',
      height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'

    }}>
      <Question value={question} onResponse={onResponse}/>
    </div>
  )
}

export default Home
