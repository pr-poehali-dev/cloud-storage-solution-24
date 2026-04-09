import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Beauty from "./pages/Beauty";
import Body from "./pages/Body";
import Health from "./pages/Health";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/beauty" element={<Beauty />} />
      <Route path="/body" element={<Body />} />
      <Route path="/health" element={<Health />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
