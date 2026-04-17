import ShinyText from "../../libraries/ShinyText/ShinyText";
import "./Home.css";
function Home() {
    return (
        <section id="home" className="home-page">
            <div className="hero">
                <div className="hero__inner">
                    {/* <div className="hero__eyebrow">
                        <ShinyText text="WELCOME TO" disabled={false} speed={5} className="hero__pill" />
                    </div> */}

                    <div className="hero__content">
                        <h1 className="hero__title">Dao Ngoc Khanh</h1>
                    </div>

                    <div className="hero__under">
                        <ShinyText text="'S PORTFOLIO" disabled={false} speed={5} className="hero__pill" />
                    </div>

                    <div className="hero__decoration">
                        <div className="line"></div>
                        <div className="hero__icon hero__icon--star-3">
                            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z" />
                            </svg>
                        </div>
                        <div className="line"></div>
                    </div>
                </div>

                {/* Khu vực chứa hiệu ứng gõ chữ */}
                {/* <div className="decorative-box">
                    <div className="decorative-line"></div>
                    <div className="decorative-job">
                        {currentText}
                        <span className="blinking-cursor">|</span>
                    </div>
                    <div className="decorative-line"></div>
                </div> */}
            </div>
        </section>
    );
}

export default Home;
