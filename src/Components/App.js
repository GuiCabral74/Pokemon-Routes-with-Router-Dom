import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "../Style/Styles";
import Home from "./Home";
import Header from "./Header";
import { router } from "../routes";

function App() {
  return (
    <BrowserRouter style={{ background: "#5B8EE5" }}>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {router.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;