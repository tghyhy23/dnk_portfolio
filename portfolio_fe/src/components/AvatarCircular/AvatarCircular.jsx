import CircularText from "../../libraries/CircularText/CircularText";
import "./AvatarCircular.css";

function AvatarCircular({ image, alt = "Profile" }) {
  return (
    <div className="avatar-circle-block">
      <div className="avatar-circle-ring">
        <CircularText
          text="CONTENT ✦ GROWTH ✦ ENGAGEMENT ✦ ADVERTISEMENT ✦ EXPOSURE ✦ STRATEGY ✦ "
          onHover="slowDown"
          spinDuration={40}
          className="avatar-circle-text"
        />

        <div className="avatar-circle-image-wrap">
          <img src={image} alt={alt} className="avatar-circle-image" />
        </div>
      </div>
    </div>
  );
}

export default AvatarCircular;