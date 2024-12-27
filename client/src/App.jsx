import { BrowserRouter, Routes, Route } from "react-router-dom";

function HomePage() {
  return <div>Home Page</div>;
}

function AboutPage() {
  return <div>About Page</div>;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
