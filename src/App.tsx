import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Screens/Main";
import Question from "./Screens/Question";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "question/:id",
    element: <Question />,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
