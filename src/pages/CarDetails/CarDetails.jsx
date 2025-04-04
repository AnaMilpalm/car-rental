import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import s from "./CarDetails.module.css";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import sprite from "../../assets/images/icon.svg";

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://car-rental-api.goit.global/cars/${id}`)
      .then((response) => {
        setCar(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading car details...</p>;
  if (error) return <p>Error: {error}</p>;
  const titleGrey = car?.id ? String(car.id).slice(0, 4) : "N/A";
  const city = car?.address ? String(car.address).split(",")[1]?.trim() : "N/A";
  const country = car?.address
    ? String(car.address).split(",")[2].trim()
    : "N/A";
  const mileage = car?.mileage
    ? `${car.mileage.toLocaleString("ru-RU")} km`
    : "N/A";

  return (
    <>
      <Header />
      <Container>
        <div className={s.car_details_container}>
          <div className={s.order_box}>
            <img src={car.img} alt={car.brand} className={s.car_image} />
            <div className={s.booking_form}>
              <h3 className={s.title_third}>Book your car now</h3>
              <form>
                <input type="text" placeholder="Name*" />
                <input type="email" placeholder="Email*" />
                <input type="date" placeholder="Booking date" />
                <textarea placeholder="Comment"></textarea>
                <button type="submit">Send</button>
              </form>
            </div>
          </div>

          <div className={s.car_info}>
            <h2 className={s.title_box}>
              <span className={s.title_details}>
                {car.brand} {car.model}, {car.year}
              </span>
              <span className={s.grey}>id: {titleGrey}</span>
            </h2>
            <div className={s.address}>
              <span className={s.part}>
                <svg className={s.icon} width="18" height="18">
                  <use href={sprite + "#icon-loc"}></use>
                </svg>
                {city}, {country}
              </span>
              <span className={s.part}>Mileage: {mileage}</span>
            </div>
            <p className={s.price}>${car.rentalPrice}</p>
            <p>{car.description}</p>
            <div className={s.condition_box}>
              <div className={s.rental_conditions}>
                <h3 className={s.title_third}>Rental Conditions:</h3>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-check"}></use>
                  </svg>
                  <span> Minimum age: 25</span>
                </p>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-check"}></use>
                  </svg>
                  <span>Security deposit required</span>
                </p>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-check"}></use>
                  </svg>
                  <span>Valid driver's license</span>
                </p>
              </div>

              <div className={s.rental_conditions}>
                <h3 className={s.title_third}>Car Specifications:</h3>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-calendar"}></use>
                  </svg>
                  <span> Year: {car.year}</span>
                </p>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-car"}></use>
                  </svg>
                  <span> Type: {car.type} </span>
                </p>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-fuel"}></use>
                  </svg>
                  <span> Fuel Consumption: {car.fuelConsumption}</span>
                </p>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-setting"}></use>
                  </svg>
                  <span>Engine: {car.engineSize}</span>
                </p>
              </div>

              <div className={s.rental_conditions}>
                <h3 className={s.title_third}>
                  Accessories and functionalities:
                </h3>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-check"}></use>
                  </svg>
                  <span>Leather seats</span>
                </p>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-check"}></use>
                  </svg>
                  <span>Panoramic sunroof</span>
                </p>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-check"}></use>
                  </svg>
                  <span>Remote start</span>
                </p>
                <p className={s.conditions}>
                  <svg className={s.icon} width="16" height="16">
                    <use href={sprite + "#icon-check"}></use>
                  </svg>
                  <span>Blind-spot monitoring</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CarDetails;
