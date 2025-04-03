import { Link } from "react-router-dom";
import s from "./CarItem.module.css";

const CarItem = ({ car }) => {
  const city = car.address.split(",")[1]?.trim();
  const country = car.address.split(",")[2]?.trim();
  const mileage = `${car.mileage.toLocaleString("ru-RU")} km`;
  return (
    <div className={s.car_card}>
      <div className={s.img_box}>
        <img src={car.img} alt={car.make} className={s.car_image} />
      </div>
      <h3 className={s.title_card}>
        <div className={s.title_part}>
          {car.brand} <span className={s.decorate}> {car.model}</span>,
          {car.year}
        </div>
        <div className={s.title_part}>${car.rentalPrice}</div>
      </h3>
      <div className={s.card_description}>
        <div className={s.grey}>
          {city} | {country} | {car.rentalCompany}
        </div>
        <div className={s.grey}>
          {car.type} | {mileage}
        </div>
      </div>

      <Link to={`/catalog/${car.id}`} className={s.button_details}>
        Read more
      </Link>
    </div>
  );
};

export default CarItem;
