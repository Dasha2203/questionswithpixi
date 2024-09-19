import { AppProvider } from "@pixi/react";
import * as PIXI from "pixi.js";
import { lazy, Suspense, useRef } from "react";
import { Spinner } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const GamePage = lazy(() => import('./Screens/Game'));
const MainPage = lazy(() => import('./Screens/Main'));
const QuestionPage = lazy(() => import('./Screens/Question'));
const ResultPage = lazy(() => import('./Screens/Result'));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "question/:id",
    element: <QuestionPage />,
  },
  {
    path: "result",
    element: <ResultPage />,
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
    <div className="bg-dark min-vh-100 d-flex flex-column">
      <AppProvider value={appRef.current}>
        <Suspense fallback={<Spinner className="my-auto align-self-center" animation="border" variant="light" />}>
          <RouterProvider router={router} />
        </Suspense>
      </AppProvider>
    </div>
  )
}

export default App
