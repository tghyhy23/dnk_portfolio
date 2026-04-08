import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      // Danh sách các id của các section bạn có/sẽ có
      const sections = ["home", "about", "projects", "contact"];
      
      // Lấy vị trí cuộn hiện tại (cộng thêm 150px offset để khi vừa chớm tới section là nó đổi màu luôn)
      const scrollPosition = window.scrollY + 150; 

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          // Nếu vị trí cuộn nằm trong phạm vi của section này -> set nó là active
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    // Lắng nghe sự kiện cuộn
    window.addEventListener("scroll", handleScroll);
    
    // Dọn dẹp sự kiện khi component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      {/* Logo bên trái */}
      <div className="navbar__logo">
        <Link to="/">Khanh.</Link>
      </div>

      {/* Các nút điều hướng bên phải */}
      <ul className="navbar__links">
        <li>
          <a 
            href="#home" 
            className={activeSection === "home" ? "active" : ""}
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="#about" 
            className={activeSection === "about" ? "active" : ""}
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""}
          >
            Projects
          </a>
        </li>
        <li>
          <a 
            href="#contact" 
            className={activeSection === "contact" ? "active" : ""}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;