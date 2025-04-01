import Button from "../Button/Button";
import s from "./HeroContent.module.css";

const HeroContent = () => {
  return (
    <div className={s.hero_content}>
      <h1 className={s.banner_title}>Find your perfect rental car</h1>
      <span className={s.banner_description}>
        Reliable and budget-friendly rentals for any journey
      </span>
      <Button>View Catalog</Button>
    </div>
  );
};

export default HeroContent;
