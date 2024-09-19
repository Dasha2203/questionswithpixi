import { Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useTypedSelector } from "../../hooks/useTypedSelector";

const Result = () => {
  const { answers } = useTypedSelector(state => state.questions)
  const navigate = useNavigate()

  if (!answers.length) {
    navigate('/')

    return null
  }

  return (
    <Container className=" pt-5 min-vh-100 text-white">
      <h3 className="h3 mb-4">Результат опроса:</h3>

      <Table striped bordered hover variant="dark" size="sm">
        <thead>
          <tr>
            <th>Вопрос</th>
            <th>Ответ</th>
          </tr>
        </thead>
        <tbody>
          {answers.map(({ questionId, question, answer }) => (
            <tr key={questionId}>
              <td>{question}</td>
              <td>{answer}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
};

export default Result;
