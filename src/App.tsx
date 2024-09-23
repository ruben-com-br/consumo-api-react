import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ApiFetch from "./components/api-fetch";
import ApiAxios from "./components/api-axios";
import ApiReactQuery from "./components/api-react-query/api-react-query";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">API em Fetch</Link>
              </li>
              <li>
                <Link to="/axios">API em Axios</Link>
              </li>
              <li>
                <Link to="/react-query">API em ReactQuery</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<ApiFetch />} />
            <Route path="/axios" element={<ApiAxios />} />
            <Route path="/react-query" element={<ApiReactQuery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
