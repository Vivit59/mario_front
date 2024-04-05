import { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { Route, Routes } from "react-router-dom";
import Menu from "./pages/menu";
import Login from "./pages/login";
import CreateAccount from "./pages/createAccount";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        {isAuthenticated ? (
          <Menu />
        ) : (
          <Login setIsAuthenticated={setIsAuthenticated} />
        )}
      </main>
    </div>
  );
}

export default App;
