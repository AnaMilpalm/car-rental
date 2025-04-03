// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import s from "./CarDetails.module.css";

// const CarDetails = () => {
//   const { id } = useParams();
//   const [car, setCar] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get(`https://car-rental-api.goit.global/cars/${id}`)
//       .then((response) => {
//         setCar(response.data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, [id]);

//   if (loading) return <p>Loading car details...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className={s.car_details}>
//       <img
//         src={car.img}
//         alt={car.brand}
//         className={s.car_img}
//         width="200px"
//         height="100px"
//       />

//       <h2>
//         {car.brand} {car.model}
//       </h2>
//       <p>Year: {car.year}</p>
//       <p>Price: ${car.rentalPrice}</p>
//       <p>Mileage: {car.mileage} km</p>
//       <p>Fuel Type: {car.fuelType}</p>
//       <p>Description: {car.description}</p>
//     </div>
//   );
// };

// export default CarDetails;
