import Header from "../../components/Header/Header";
import s from "./Catalog.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, setPage } from "../../redux/carsSlice";
import CarItem from "../../components/CarItem/CarItem";
import Container from "../../components/Container/Container";
import Searching from "../../components/Searching/Searching";

const Catalog = () => {
  const dispatch = useDispatch();
  const { cars, pagination, status, error } = useSelector(
    (state) => state.cars
  );

  useEffect(() => {
    dispatch(fetchCars({ page: pagination.page, limit: pagination.limit }));
  }, [dispatch, pagination.page, pagination.limit]);

  return (
    <>
      <Header />

      <div className={s.catalog}>
        <Searching />
        {status === "loading" && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <Container>
          <div className={s.car_list}>
            {cars.map((car) => (
              <CarItem key={car.id} car={car} />
            ))}
          </div>
          <button
            className={s.button_more}
            onClick={() => dispatch(setPage(pagination.page + 1))}
          >
            Load More
          </button>
        </Container>
      </div>
    </>
  );
};

export default Catalog;
