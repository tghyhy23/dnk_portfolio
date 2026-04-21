import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./ExperienceDetail.css";
import { ExperienceStats } from "../../components/ExperiencesStats/ExperienceStats";


function ExperienceDetail() {
    const location = useLocation();
    const navigate = useNavigate();
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
            { threshold: 0.1 },
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

    const experience = location.state?.experience;

    if (!experience) {
        return (
            <div className="exp-detail__error">
                <h2>Không tìm thấy dữ liệu!</h2>
                <button onClick={() => navigate("/")}>Quay lại trang chủ</button>
            </div>
        );
    }

    // Lấy data stats từ mảng, hoặc dùng mặc định nếu mảng chưa có
    const statsData = experience.stats;

    return (
        <div className={`exp-detail ${isVisible ? "is-visible" : ""}`} ref={sectionRef}>
            {/* HERO SECTION */}
            <section className="exp-detail-hero">
                <div className="exp-detail-hero-bg">
                    <img src={experience.img} alt={experience.companyName} />
                </div>

                <div className="exp-detail-hero-overlay"></div>

                <div className="exp-detail-hero-content">
                    <div className="exp-detail-left">
                        <h2 className="exp-detail-hero-left-content">
                            <span className="subtitle">My experience in</span>
                            <br />
                            <span className="title">{experience.companyName}</span>
                        </h2>

                        <div className="exp-detail-left-small-content">
                            <span className="badge">{experience.year}</span>
                            <h3>{experience.role}</h3>
                            <p>{experience.details}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gọi Component Thống kê và truyền data xuống */}
            <ExperienceStats statsData={statsData} />

        </div>
    );
}

export default ExperienceDetail;