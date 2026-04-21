import { useEffect, useRef, useState } from "react";
import "./About.css";

// TODO: Import ảnh của bạn ở đây. Ví dụ:
import profileImg from "../../assets/images/hana_img.jpg";
import AvatarCircular from "../../components/AvatarCircular/AvatarCircular";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      className={`about-page ${isVisible ? "is-visible" : ""}`} 
      ref={sectionRef}
    >
      {/* --- CÁC DECORATIVE ICONS --- */}
      <div className="about__icon about__icon--star-1">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"/>
        </svg>
      </div>

      <div className="about__icon about__icon--star-2">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"/>
        </svg>
      </div>

      <div className="about__icon about__icon--star-3">
        <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"/>
        </svg>
      </div>
      {/* --------------------------- */}

      <div className="about__container">
        
        {/* CỘT TRÁI: Hình ảnh (chiếm 1/3) */}
        <div className="about__image-wrapper">
          {/* Thay src bằng profileImg nếu bạn dùng import */}
          <AvatarCircular image={profileImg} alt="Dao Ngoc Khanh" />
        </div>

        {/* CỘT PHẢI: Nội dung (chiếm 2/3) - Xếp dọc 1 cột */}
        <div className="about__content">
          
          <div className="about__header">
            <h2 className="about__title">About Me!</h2>
          </div>

          <div className="about__text">
            <p>
              Xin chào, tôi là <strong>Đào Ngọc Khanh</strong>.  I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana,
            </p>
            <p>
             I love Hana,  I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana, I love Hana,
            </p>
          </div>
          
          {/* Nút bấm mang phong cách giống mẫu */}
          <button className="about__btn">Download CV</button>

        </div>
        
      </div>
    </section>
  );
}

export default About;