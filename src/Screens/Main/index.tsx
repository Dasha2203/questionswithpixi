import { useEffect } from "react";
import { Alert, Button, Container, Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";
import { fetchQuestions } from "../../store/actionCreators/questions";
import { useAppDispatch } from "../../hooks/useTypedDispatch";

const Main = () => {
  const navigate = useNavigate()
  const { questions, isLoading, error } = useTypedSelector(state => state.questions)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchQuestions())
  }, [])

  function handleClick() {
    if (!questions.length) return

    const firstId = questions[0].id
    navigate(`/question/${firstId}`)
  }

  return (
    <Container className="min-vh-100 justify-content-center align-items-center d-flex flex-column">
      <h1 className="mb-4 text-center text-white">Ваше мнение о программном средстве</h1>

      {isLoading && <Spinner animation="border" variant="light" />}
      {error && <Alert variant="danger">{error}</Alert>}
      {!questions.length && !error && !isLoading && <Alert variant="warning">Вопросов нет</Alert>}

      {!error && !isLoading && questions.length && (
        <>
          <p className="text-center text-white">Чтобы начать, нажмите "Начать"</p>
          <Button variant="primary" className="mt-2" onClick={handleClick}>Начать</Button>
        </>
      )}
    </Container>
  )
};

export default Main;
