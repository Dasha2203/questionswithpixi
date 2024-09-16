import {  Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate()

  function handleClick() {
    navigate('/question/1')
  }

  return (
    <Container className="min-vh-100 justify-content-center align-items-center d-flex flex-column">
      <h1 className="text-center text-white">Какой-то заголовок возможно длинный Какой-то заголовок возможно длинный</h1>
      <p className="mt-4 text-center text-white">Чтобы начать, нажмите "Начать"</p>
      <Button variant="primary" className="mt-2" onClick={handleClick}>Начать</Button>
    </Container>
  )
};

export default Main;
