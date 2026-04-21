import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");
    // THÊM: State để kiểm tra xem đã cuộn trang chưa
    const [isScrolled, setIsScrolled] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            // 1. Logic đổi màu nền Navbar (Áp dụng cho mọi trang)
            if (window.scrollY > 50) {
                setIsScrolled(true); // Nếu cuộn quá 50px thì đổi màu
            } else {
                setIsScrolled(false); // Về top thì trở lại màu cũ
            }

            // 2. Logic bắt Active menu (Chỉ chạy ở trang chủ)
            if (location.pathname !== "/") return;

            const sections = ["home", "about", "experiences", "skills", "contact"];
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
    }, [location.pathname]);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();

        if (location.pathname === "/") {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate("/");
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            }, 100);
        }
    };

    return (
        // THÊM: Gắn class "scrolled" nếu state isScrolled = true
        <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
            <div className="navbar__container">
                <ul className="navbar__links side-left">
                    <li>
                        <a href={`/#${"about"}`} className={activeSection === "about" && location.pathname === "/" ? "active" : ""} onClick={(e) => handleNavClick(e, "about")}>
                            ABOUT
                        </a>
                    </li>
                    <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                    </svg>
                    <li>
                        <a href={`/#${"skills"}`} className={activeSection === "skills" && location.pathname === "/" ? "active" : ""} onClick={(e) => handleNavClick(e, "skills")}>
                            SKILLS
                        </a>
                    </li>
                </ul>

                <div className="navbar__logo">
                    <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                        DNK
                    </Link>
                </div>

                <ul className="navbar__links side-right">
                    <li>
                        <a href={`/#${"experiences"}`} className={activeSection === "experiences" && location.pathname === "/" ? "active" : ""} onClick={(e) => handleNavClick(e, "experiences")}>
                            WORKS
                        </a>
                    </li>

                    <svg className="star-icon" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                    </svg>
                    <li>
                        <a href={`/#${"contact"}`} className={activeSection === "contact" && location.pathname === "/" ? "active" : ""} onClick={(e) => handleNavClick(e, "contact")}>
                            CONTACT
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;