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
    <div className="bg-dark">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
