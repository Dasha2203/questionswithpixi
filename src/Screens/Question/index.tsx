import { Button, Col, Container, Form, ProgressBar, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const testData = {
  "id": 1,
  question: "Что вы любите покушать",
  variants: [
    "Рыбу",
    "Мясо",
    "Бургеры",
    "Пиццу",
    "Cуши"
  ]
}

const Question = () => {
  let { id } = useParams()

  function handleClick() {

  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value)
  }

  return (
    <Container className=" pt-5 min-vh-100 text-white">
      <div className="w-100">
        <p>Вопрос №{id}</p>
        <ProgressBar striped variant="info" now={20} />

        <h2 className="mt-5">Какой-то вопрос</h2>

        <Form className="w-100">
          {testData.variants.map((item, idx) => (
            <Form.Check
              key={idx}
              id={`${idx}`}
              type={'radio'}
              name={id}
              value={item}
              label={item}
              className="my-3 pe-auto pointer"
              onChange={handleChange}
            />
          ))}
          <Row>
            <Col sm={true} md="auto" className="ms-auto">
              <Button
                variant="primary"
                size="sm"
                className="d-block d-md ms-auto mt-5 w-100"
                onClick={handleClick}
              >
                Далее
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </Container>
  )
};

export default Question;
