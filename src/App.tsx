import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Screens/Main";
import Question from "./Screens/Question";
import Result from "./Screens/Result";

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
]);

function App() {
  
  return (
    <div className="bg-dark">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
