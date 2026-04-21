import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Experiences.css";

const experienceData = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=400&auto=format&fit=crop",
    role: "Event Host",
    year: "2023 - Present",
    companyName: "Boardgames",
    details: "Chịu trách nhiệm chính trong việc lên kịch bản, dẫn dắt các buổi chơi game tương tác...",
    stats: [
        { id: 1, value: 150, label: "Stats", suffix: "+" },
        { id: 2, value: 3000, label: "Stats", suffix: "+" },
        { id: 3, value: 100, label: "Stats", suffix: "%" },
    ]
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=400&auto=format&fit=crop",
    role: "Event Support",
    year: "2022 - 2023",
    companyName: "NCT",
    details: "Hỗ trợ đội ngũ sản xuất trong việc điều phối thiết bị...",
    stats: [
        { id: 1, value: 45, label: "Stats", suffix: "" },
        { id: 2, value: 800, label: "Stats", suffix: "h" },
        { id: 3, value: 0, label: "Stats", suffix: "" },
    ]
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400&auto=format&fit=crop",
    role: "Project Assistant",
    year: "2021 - 2022",
    companyName: "Caravel",
    details: "Làm việc trực tiếp với Giám đốc dự án để theo dõi KPI...",
    stats: [
        { id: 1, value: 12, label: "Stats", suffix: "" },
        { id: 2, value: 95, label: "Stats", suffix: "%" },
        { id: 3, value: 3, label: "Stats", suffix: "" },
    ]
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=400&auto=format&fit=crop",
    role: "Event Planner",
    year: "2020 - 2021",
    companyName: "Freelance",
    details: "Nhận các dự án tiệc cưới, tiệc cuối năm độc lập...",
    stats: [
        { id: 1, value: 20, label: "Stats", suffix: "+" },
        { id: 2, value: 99, label: "Stats", suffix: "%" },
        { id: 3, value: 50, label: "Stats", suffix: "+" },
    ]
  },
  {
    id: 5,
    img: "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?q=80&w=400&auto=format&fit=crop",
    role: "Coordinator",
    year: "2019 - 2020",
    companyName: "JvenTech",
    details: "Điều phối viên công nghệ cho sự kiện...",
    stats: [
        { id: 1, value: 15, label: "Stats", suffix: "" },
        { id: 2, value: 500, label: "Stats", suffix: "+" },
        { id: 3, value: 120, label: "Stats", suffix: "h" },
    ]
  },
];

// Nhân 3 mảng để làm vòng lặp vô tận
const DATA_LENGTH = experienceData.length;
const carouselData = [...experienceData, ...experienceData, ...experienceData];

function Experiences() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // --- STATE CHO CAROUSEL ---
  const [itemsPerView, setItemsPerView] = useState(5);
  const [currentIndex, setCurrentIndex] = useState(DATA_LENGTH); // Bắt đầu từ đầu mảng thứ 2
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  // Xử lý Responsive số lượng hiển thị trên 1 hàng
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) setItemsPerView(1); // Mobile: 1 card
      else if (window.innerWidth <= 1024) setItemsPerView(3); // Tablet: 3 cards
      else setItemsPerView(5); // Desktop: 5 cards
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fade-in effect khi scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // --- LOGIC ĐIỀU HƯỚNG CAROUSEL ---
  const nextSlide = () => {
    if (isAnimating) return; // Chặn click liên tục gây lỗi UI
    setIsAnimating(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => prev - 1);
  };

  // Reset vị trí ngầm (Snap) khi chạy hết mảng giữa
  const handleTransitionEnd = () => {
    if (currentIndex >= DATA_LENGTH * 2) {
      setIsTransitioning(false); // Tắt hiệu ứng mượt
      setCurrentIndex(currentIndex - DATA_LENGTH); // Nhảy về mảng giữa
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setCurrentIndex(currentIndex + DATA_LENGTH);
    } else {
      setIsAnimating(false);
    }
  };

  // Bật lại hiệu ứng mượt sau khi snap
  useEffect(() => {
    if (!isTransitioning) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransitioning(true);
          setIsAnimating(false);
        });
      });
    }
  }, [isTransitioning]);

  const handleCardClick = (item) => {
    navigate(`/experience/${item.id}`, { state: { experience: item } });
  };

  return (
    <section className={`experiences ${isVisible ? "is-visible" : ""}`} ref={sectionRef} id="experiences">
      <div className="experiences__header">
        <h2 className="experiences__title">My Experiences.</h2>
      </div>

      <div className="experiences__desc">
        <p>From coordinating small teams to managing large-scale events, each experience has shaped my mindset, sharpened my skills, and defined who I am today.</p>
      </div>

      <div className="carousel-wrapper">
        {/* Nút Backward */}
        <button className="carousel-btn prev" onClick={prevSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Thanh cuộn ngang */}
        <div className="experiences__carousel">
          <div 
            className="experiences__track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${(currentIndex / carouselData.length) * 100}%)`,
              transition: isTransitioning ? 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
              width: `${(carouselData.length / itemsPerView) * 100}%`
            }}
          >
            {carouselData.map((item, index) => (
              <div 
                className="experiences__item" 
                key={`${item.id}-${index}`}
                style={{ width: `${100 / carouselData.length}%` }}
              >
                {/* Thẻ Card */}
                <article 
                  className="experiences__card" 
                  onClick={() => handleCardClick(item)}
                >
                  <div className="experiences__card-img">
                    <img src={item.img} alt={item.companyName} draggable="false" loading="lazy" />
                  </div>
                  <div className="experiences__card-content">
                    <h3 className="experiences__card-title">{item.companyName}</h3>
                    <p className="experiences__card-text">{item.role}</p>
                  </div>
                </article>

                {/* Trục Timeline ở dưới */}
                <div className="experiences__timeline">
                  <div className="experiences__timeline-line"></div>
                  <div className="experiences__timeline-year">{item.year}</div>
                  <div className="experiences__timeline-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nút Forward */}
        <button className="carousel-btn next" onClick={nextSlide}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
}

export default Experiences;