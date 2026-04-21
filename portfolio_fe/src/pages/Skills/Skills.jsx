import React, { useEffect, useRef, useState } from "react";
import { Calendar, Crown, Puzzle, MessageSquare, LineChart, ClockCheck, Waves } from "lucide-react";
import "./Skills.css";

// Dữ liệu 7 Skills
const skillsData = [
    {
        id: 0,
        title: "Event Planner",
        desc: "Lên kế hoạch tổng thể, thiết kế concept và lập ngân sách chi tiết cho mọi loại hình sự kiện.",
        icon: <Calendar size={36} />,
    },
    { id: 1, title: "Leadership", desc: "Quản lý đội ngũ, điều phối nhân sự và tạo động lực làm việc nhóm hiệu quả.", icon: <Crown size={36} /> },
    { id: 2, title: "Problem Solving", desc: "Bình tĩnh xử lý rủi ro và các tình huống phát sinh trực tiếp tại hiện trường.", icon: <Puzzle size={36} /> },
    { id: 3, title: "Communication", desc: "Giao tiếp, thương lượng mượt mà với khách hàng, đối tác và nhà cung cấp (vendor).", icon: <MessageSquare size={36} /> },
    { id: 4, title: "Marketing", desc: "Thấu hiểu Insight khách hàng, xây dựng chiến lược truyền thông cho dự án.", icon: <LineChart size={36} /> },
    { id: 5, title: "Time Management", desc: "Kiểm soát timeline chặt chẽ, đảm bảo deadline từng giai đoạn dự án.", icon: <ClockCheck size={36} /> },
    { id: 6, title: "Adaptability", desc: "Thích nghi nhanh với môi trường, linh hoạt thay đổi kịch bản khi cần thiết.", icon: <Waves size={36} /> },
];

const Skills = () => {
    // Trạng thái lưu skill đang được click (Mặc định là skill đầu tiên)
    const [isVisible, setIsVisible] = useState(false);
    const [activeSkill, setActiveSkill] = useState(skillsData[0]);
    const sectionRef = useRef(null);

    // Fade-in effect khi scroll
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setIsVisible(true);
                });
            },
            { threshold: 0.1 },
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section className={`skills-section ${isVisible ? "is-visible" : ""}`} ref={sectionRef} id="skills">
            <div className="skills-description">
                <h2 className="skills-title">My Skills.</h2>
                <p>Với kinh nghiệm dày dặn trong lĩnh vực tổ chức sự kiện, tôi sở hữu một bộ kỹ năng đa dạng và chuyên sâu. Tôi có khả năng lên kế hoạch chi tiết, quản lý đội ngũ hiệu quả, giải quyết vấn đề nhanh chóng và giao tiếp mượt mà với khách hàng cũng như đối tác. Tôi cũng có kiến thức về marketing để xây dựng chiến lược truyền thông cho dự án, cùng với kỹ năng quản lý thời gian và khả năng thích nghi linh hoạt trong môi trường sự kiện luôn thay đổi.</p>
            </div>
            <div className="skills-container">
                {/* Vòng tròn lớn */}
                <div className="skills-main-circle">
                    {/* Nội dung ở giữa (Được bọc key để trigger animation mỗi khi đổi skill) */}
                    <div className="skills-center-content" key={activeSkill.id}>
                        <h3>{activeSkill.title}</h3>
                        <p>{activeSkill.desc}</p>
                    </div>

                    {/* 7 Hình tròn nhỏ (Skills) nằm trên đường viền */}
                    {skillsData.map((skill, index) => (
                        <div
                            key={skill.id}
                            className={`skill-item ${activeSkill.id === skill.id ? "active" : ""}`}
                            style={{ "--i": index }} // Truyền index vào CSS để tính góc
                            onClick={() => setActiveSkill(skill)}
                        >
                            <span className="skill-icon">{skill.icon}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
