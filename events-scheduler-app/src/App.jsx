import Home from "./Components/home.jsx";
import MainLayout from "./Components/MainLayout.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";


import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from "react-router-dom";

const router = createBrowserRouter(createRoutesFromElements(
      <Route path="" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="Register" element={<Register />} />
        <Route path="LogIn" element={<LogIn/>} />
      </Route>

));
function App() {
  return (
    <>
  
    <RouterProvider router={router} />
    </>
  );
}

export default App;