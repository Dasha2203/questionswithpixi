import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Screens/Main";
import Question from "./Screens/Question";
import Result from "./Screens/Result";
import { lazy, Suspense } from "react";
import { Spinner } from "react-bootstrap";

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

  return (
    <div className="bg-dark">
      <Suspense fallback={<Spinner animation="border" variant="light" />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  )
}

export default App
