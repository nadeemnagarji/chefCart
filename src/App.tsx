import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import DishPage from "./pages/DishPage";
import { FoodProvider } from "./contexts/foodContext";

function App() {
  return (
    <FoodProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dish/:id" element={<DishPage />} />
        </Routes>
      </Router>
    </FoodProvider>
  );
}

export default App;
