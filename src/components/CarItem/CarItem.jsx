import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from "./CarItem.module.css";
import { toggleFavorite } from "../../redux/carsSlice";
import sprite from "../../assets/images/icon.svg";

const CarItem = ({ car }) => {
  const city = car.address.split(",")[1]?.trim();
  const country = car.address.split(",")[2]?.trim();
  const mileage = `${car.mileage.toLocaleString("ru-RU")} km`;

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.cars.favorites);
  const isFavorite = favorites.includes(car.id);

  const handleFavoriteClick = () => {
    dispatch(toggleFavorite(car.id));
  };
  return (
    <div className={s.car_card}>
      <div className={s.img_box}>
        <img src={car.img} alt={car.make} className={s.car_image} />
        <button className={s.heart_button} onClick={handleFavoriteClick}>
          {isFavorite ? (
            <svg className={s.icon_fill} width="16" height="16">
              <use href={sprite + "#icon-heart2"}></use>
            </svg>
          ) : (
            <svg className={s.icon} width="16" height="16">
              <use href={sprite + "#icon-heart"}></use>
            </svg>
          )}
        </button>
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
