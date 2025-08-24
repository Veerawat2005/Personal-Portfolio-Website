// src/components/About/About.jsx
import { Code, Palette, Zap, Heart } from "lucide-react";
import "./About.css";
import Me from "../../assets/cat.jpg";

function About() {
  const skills = [
    {
      name: "Frontend Development",
      icon: <Code size={24} />,
      color: "#3b82f6",
    },
    { name: "UI/UX Design", icon: <Palette size={24} />, color: "#10b981" },
    {
      name: "Performance Optimization",
      icon: <Zap size={24} />,
      color: "#f59e0b",
    },
    { name: "Problem Solving", icon: <Heart size={24} />, color: "#ef4444" },
  ];

  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <p className="about-description">
             สวัสดีครับ ผมชื่อไบร์ท เป็นนักพัฒนาเว็บที่หลงใหลในเทคโนโลยีและการออกแบบ
              ที่มุ่งมั่นในการสร้างประสบการณ์ผู้ใช้ที่ยอดเยี่ยม
              และมีประสิทธิภาพสูงสุด
            </p>
            <p className="about-description">
              ผมมีงานอดิเรกในการเรียนรู้เทคโนโลยีใหม่ๆและพัฒนาทักษะการเขียนโค้ดของตัวเองอยู่เสมอนอกจากนี้ยังชอบทำงานร่วมกับทีมและแบ่งปันความรู้
              กับผู้อื่นเพื่อสร้างสรรค์ผลงานที่ดีที่สุด
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div
                    className="skill-icon"
                    style={{
                      backgroundColor: skill.color + "20",
                      color: skill.color,
                    }}
                  >
                    {skill.icon}
                  </div>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>

            <div className="about-actions">
              <a href="/resume.pdf" className="btn-primary" download>
                Download Resume
              </a>
              <button
                className="btn-secondary"
                onClick={() =>
                  document
                    .getElementById("contact")
                    .scrollIntoView({ behavior: "smooth" })
                }
              >
                Get In Touch
              </button>
            </div>
          </div>

          <div className="about-image">
            <div className="image-placeholder">
              <div className="placeholder-content">
                <img src={Me} alt="my Profile" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;