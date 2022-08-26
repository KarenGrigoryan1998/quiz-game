import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Quiz from "../Pages/Quiz";
import Results from "../Pages/Results";

function Routers() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/results" element={<Results />} />
            </Routes>
        </Router>
    );
}

export default Routers;