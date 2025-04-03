import { Link } from "react-router-dom";
import s from "./CarItem.module.css";

const CarItem = ({ car }) => {
  return (
    <div className={s.car_card}>
      <img src={car.img} alt={car.make} className={s.car_image} />
      <h3 className={s.title_card}>
        <div className={s.title_part}>
          {car.brand} <span className={s.decorate}> {car.model}</span>,
          {car.year}
        </div>
        <div className={s.title_part}>${car.rentalPrice}</div>
      </h3>

      <Link to={`/cars/${car.id}`} className={s.details_button}>
        View Details
      </Link>
    </div>
  );
};

export default CarItem;
