import s from "./HeroBanner.module.css";
import bannerImg from "../../assets/images/main-web-min.jpg";
import HeroContent from "../HeroContent/HeroContent";

const HeroBanner = () => {
  return (
    <div className={s.banner_box}>
      <div className={s.img_box}>
        <img src={bannerImg} alt="Rent Car" />
      </div>
      <HeroContent />
    </div>
  );
};

export default HeroBanner;
