// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './styles/base.css';
import Navbar from "./components/Navbar/Navbar";
import MainPortfolio from "./MainPortfolio";

// Import các trang độc lập khác (nếu có sau này)
// import Blog from "./pages/Blog/Blog"; 
// import ProjectDetails from "./pages/ProjectDetails/ProjectDetails";

function App() {
  return (
    <Router>
      {/* Navbar nằm ngoài Routes để luôn hiển thị và không bị load lại khi chuyển route */}
      <Navbar />
      
      {/* Thẻ div bọc ngoài cùng này giúp quản lý layout tổng thể tránh bị giật */}
      <div className="app-layout">
        <Routes>
          {/* Trang chủ: Chứa Home, About, Projects cuộn từ trên xuống */}
          <Route path="/" element={<MainPortfolio />} />
          
          {/* Các trang riêng biệt sau này (chuyển trang thực sự, không cuộn) */}
          {/* <Route path="/blog" element={<Blog />} /> */}
          {/* <Route path="/project/:id" element={<ProjectDetails />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;