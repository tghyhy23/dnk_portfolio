import React, { useEffect, useRef, useState } from "react";
import "./ExperienceStats.css";

// Component con: Xử lý hiệu ứng nhảy số cho từng cục riêng biệt
const StatCounter = ({ value, label, description, suffix = "", duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); 
                }
            },
            { threshold: 0.5 }
        );

        if (counterRef.current) observer.observe(counterRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * value));

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }, [isVisible, value, duration]);

    return (
        <div className="stat-item" ref={counterRef}>
            <h3 className="stat-value">
                {count}
                <span className="stat-suffix">{suffix}</span>
            </h3>
            {/* Title */}
            <h4 className="stat-label">{label}</h4>
            {/* Nội dung mô tả */}
            {description && <p className="stat-desc">{description}</p>}
        </div>
    );
};

// Component chính: Render danh sách các số liệu
export const ExperienceStats = ({ statsData }) => {
    if (!statsData || statsData.length === 0) return null;

    return (
        <section className="exp-detail-stats">
            <div className="stats-container">
                {statsData.map((stat) => (
                    <StatCounter 
                        key={stat.id} 
                        value={stat.value} 
                        label={stat.label} 
                        description={stat.description} /* Truyền thêm description */
                        suffix={stat.suffix} 
                        duration={2500} 
                    />
                ))}
            </div>
        </section>
    );
};