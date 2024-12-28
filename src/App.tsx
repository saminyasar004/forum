import Layout from "./components/common/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/pages/Feed";
import Question from "./components/pages/Question";

export default function App() {
    return (
        <>
            <Router>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Feed />} />
                        <Route path="/question/:id" element={<Question />} />
                    </Routes>
                </Layout>
            </Router>
        </>
    );
}
