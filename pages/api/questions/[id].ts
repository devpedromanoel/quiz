import type { NextApiRequest, NextApiResponse } from "next";

import questions from "../questionsDB";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const selectedID = +req.query.id;
  const selectedQuestion = questions.filter(question => question.id === selectedID);

  if(selectedQuestion.length === 1) {
    const selected = selectedQuestion[0].randomizeAnswers();
    res.status(200).json(selected.toObject());
  } else {
    res.status(204).send(res.statusCode);
  }
}