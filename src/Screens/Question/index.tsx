import { useEffect } from "react";
import { Button, Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

import { useAppDispatch } from "../../hooks/useTypedDispatch";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchQuestions, setAnswerAction } from "../../store/actionCreators/questions";

const Question = () => {
  const { questions, answers } = useTypedSelector(state => state.questions)
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  
  const index = useTypedSelector(state => state.questions.questions.findIndex(i => i.id === Number(id)))
  const answer = answers.find(i => i.questionId === Number(id))?.answer
  const question = questions[index] || null

  useEffect(() => {
    if (questions.length) return

    dispatch(fetchQuestions())
  }, [])

  function handleClick() {
    const nextQuestion = questions[index + 1] || null

    if (nextQuestion) {
      navigate(`/question/${nextQuestion.id}`)
      return
    }

    navigate(`/result`)
  }

  function handleBackClick() {
    navigate(-1)
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    dispatch(setAnswerAction({
      questionId: Number(id),
      answer: event.target.value,
      question: question.question
    }))
  }

  if (index === -1) {
    navigate('/')

    return null
  }

  return (
    <Container className="pt-5 min-vh-100 text-white">
      <div className="w-100">
        <p>Вопрос №{id}</p>
        <ProgressBar striped variant="info" now={(index + 1) / questions.length * 100} />

        <h2 className="mt-5">{question.question}</h2>

        <Form className="w-100">
          {question?.options.map((item, idx) => (
            <Form.Check
              key={idx}
              id={`${idx}`}
              type={'radio'}
              name={id}
              value={item}
              label={item}
              checked={answer === item}
              className="my-3 pe-auto pointer"
              onChange={handleChange}
            />
          ))}
          <Row>
            <Col sm={true} md="auto" className="ms-auto d-flex gap-2">
              {index ? (
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="d-block d-md ms-auto mt-5 w-100"
                  onClick={handleBackClick}
                >
                  Назад
                </Button>
              ) : null}
              <Button
                variant={index + 1 !== questions.length ? 'primary' : 'success'}
                size="sm"
                className="d-block d-md ms-auto mt-5 w-100"
                onClick={handleClick}
                disabled={!answer}
              >
                {index + 1 !== questions.length ? 'Далее' : 'Завершить'}
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  )
};

export default Question;
