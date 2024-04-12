import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./pages/menu";
import Login from "./pages/login";
import CreateAccount from "./pages/createAccount";
import Congrats from "./pages/congrats";
import OrderOk from "./pages/orderOk";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            {isAuthenticated ? (
              <Route path="/menu" element={<Menu />} />
            ) : (
              <Route
                path="/"
                element={<Login setIsAuthenticated={setIsAuthenticated} />}
              ></Route>
            )}
            <Route
              path="/create"
              element={
                <CreateAccount setIsAuthenticated={setIsAuthenticated} />
              }
            />
            <Route path="/congrats" element={<Congrats />} />
            <Route path="/ok" element={<OrderOk />} />{" "}
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
