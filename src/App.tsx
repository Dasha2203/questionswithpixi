import { AppProvider } from "@pixi/react";
import * as PIXI from "pixi.js";
import { lazy, Suspense, useRef } from "react";
import { Spinner } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Screens/Main";
import Question from "./Screens/Question";
import Result from "./Screens/Result";

const GamePage = lazy(() => import('./Screens/Game'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "question/:id",
    element: <Question />,
  },
  {
    path: "result",
    element: <Result />,
  },
  {
    path: "game",
    element: <GamePage />,
  },
]);

function App() {

  const appRef = useRef(new PIXI.Application({
    width: 800,
    height: 600,
    backgroundColor: 0x1099bb,
  }));

  return (
    <div className="bg-dark">
      <AppProvider value={appRef.current}>
        <Suspense fallback={<Spinner animation="border" variant="light" />}>
          <RouterProvider router={router} />
        </Suspense>
      </AppProvider>
    </div>
  )
}

export default App
