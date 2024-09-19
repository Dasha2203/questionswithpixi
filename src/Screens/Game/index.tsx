import { Button, Container, ProgressBar } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { Stage } from "@pixi/react";

import MyComponent from "./Game";
import { Size } from "./types";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const [size, setSize] = useState<Size>({ width: 400, height: 300 })
  const [erasedArea, setErasedArea] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!ref.current) return

    setSize({
      width: ref.current.clientWidth,
      height: ref.current.clientWidth / 16 * 9
    })
  }, [ref])

  return (
    <Container className="pt-5 min-vh-100 text-white">
      <div ref={ref} className="w-100 w-md-50 mx-auto">
        <h2 className="h2 text-center mb-4">
          Чтобы посмотреть результат, сотрите 80% области
        </h2>
        <ProgressBar striped variant="info" now={erasedArea} className="mb-2" />
        <Stage
          width={size.width}
          height={size.height}
          options={{ backgroundColor: 0x1099bb }}
        >
          <MyComponent setErasedArea={setErasedArea} size={size} />
        </Stage>
        <Button
          variant="success"
          size="lg"
          className="d-block d-md ms-auto mt-5 w-100"
          onClick={() => navigate('/result')}
          disabled={erasedArea < 80}
        >
          Завершить
        </Button>
      </div>
    </Container>
  )
};

export default Game;
