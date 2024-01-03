import Layout from "./layout/Layout";
import { Routes, Route } from "react-router-dom";
import Track from "./components/track/Track";
import Home from "./components/homepage/Home";
import Signup from './components/login/Signup'
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/track" element={<Track />} />
          <Route path="/signup" element={<Signup />} />

        </Routes>
      </Layout>
    </>
  );
}

export default App;
