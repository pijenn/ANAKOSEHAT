import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Register" element={<Register />} />
                </Routes>
            </Router>
        </>
    );
};

export default App;
