import ShinyText from "../../libraries/ShinyText/ShinyText";
import "./Home.css";
function Home() {

    return (
        <section id="home" className="home-page">
            <div className="hero">
                <div className="hero__inner">
                    <div className="hero__eyebrow">
                        <ShinyText text="WELCOME TO" disabled={false} speed={5} className="hero__pill" />
                    </div>

                    <div className="hero__content">
                        <h1 className="hero__title">Dao Ngoc Khanh</h1>
                    </div>

                    <div className="hero__under">
                        <ShinyText text="'S PORTFOLIO" disabled={false} speed={5} className="hero__pill" />
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