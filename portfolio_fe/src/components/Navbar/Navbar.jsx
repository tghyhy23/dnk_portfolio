import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    
    // THÊM: Lấy thông tin URL hiện tại và hàm điều hướng
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            // Chỉ chạy logic bắt scroll khi đang ở trang chủ (/)
            if (location.pathname !== "/") return;

            const sections = ["home", "about", "experiences", "contact"];
            const scrollPosition = window.scrollY + 150;

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]); // Cập nhật dependency

    // THÊM: Hàm xử lý khi click vào các link trên Navbar
    const handleNavClick = (e, sectionId) => {
        e.preventDefault(); // Ngăn hành vi mặc định của thẻ <a>

        if (location.pathname === "/") {
            // 1. Đang ở trang chủ -> Chỉ cần cuộn tới element
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            // 2. Đang ở trang khác -> Quay về trang chủ trước
            navigate("/");
            
            // Dùng setTimeout chờ trang chủ render DOM xong (khoảng 100ms) rồi mới cuộn
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                {/* Nhóm link bên trái */}
                <ul className="navbar__links side-left">
                    <li>
                        {/* THAY ĐỔI: Dùng onClick gọi hàm xử lý thay vì href="#..." */}
                        <a 
                            href={`/#${"home"}`} 
                            className={activeSection === "home" && location.pathname === "/" ? "active" : ""}
                            onClick={(e) => handleNavClick(e, "home")}
                        >
                            HOME
                        </a>
                    </li>
                    <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                    </svg>
                    <li>
                        <a 
                            href={`/#${"about"}`} 
                            className={activeSection === "about" && location.pathname === "/" ? "active" : ""}
                            onClick={(e) => handleNavClick(e, "about")}
                        >
                            ABOUT
                        </a>
                    </li>
                </ul>

                {/* Logo ở chính giữa (Cái này dùng <Link to="/"> là chuẩn rồi) */}
                <div className="navbar__logo">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>DNK</Link>
                </div>

                {/* Nhóm link bên phải */}
                <ul className="navbar__links side-right">
                    <li>
                        <a 
                            href={`/#${"experiences"}`} 
                            className={activeSection === "experiences" && location.pathname === "/" ? "active" : ""}
                            onClick={(e) => handleNavClick(e, "experiences")}
                        >
                            WORK
                        </a>
                    </li>
                    <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                    </svg>
                    <li>
                        <a 
                            href={`/#${"contact"}`} 
                            className={activeSection === "contact" && location.pathname === "/" ? "active" : ""}
                            onClick={(e) => handleNavClick(e, "contact")}
                        >
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;