import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HomePage, AboutPage } from "./pages/z-index.pages";
import {
  ScrollToTopComponent,
  Navbar,
  Footer,
} from "./components/z-index.component";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTopComponent />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
