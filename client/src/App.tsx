import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import { useAppSelector } from "./hooks/useAppSelector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

const App = () => {
  const { theme } = useAppSelector((state) => state.theme);
  console.log(theme);
  return (
    <div className={theme}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
