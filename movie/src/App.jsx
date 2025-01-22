import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import MovieDetail from "./MovieDetail";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/details/:id" element={<MovieDetail />} />
      </Route>
    </Routes>
  );
};

export default App;