import { useDispatch, useSelector } from "react-redux";
import { setFilters, fetchCars } from "../../redux/carsSlice";
import s from "./Searching.module.css";

const Searching = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.cars.filters);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    dispatch(setFilters({ [name]: value }));
  };

  const handleSearch = () => {
    dispatch(fetchCars({ page: 1, limit: 12, filters }));
  };

  return (
    <div className={s.search_box}>
      <div className={s.filter}>
        <label>Car brand</label>
        <select
          name="brand"
          value={filters.brand}
          onChange={handleFilterChange}
        >
          <option value="">Choose a brand</option>
          <option value="Aston Martin">Aston Martin</option>
          <option value="BMW">BMW</option>
          <option value="Bentley">Bentley</option>
          <option value="Buick">Buick</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Chrysler">Chrysler</option>
          <option value="GMC">GMC</option>
          <option value="HUMMER">HUMMER</option>
        </select>
      </div>

      <div className={s.filter}>
        <label>Price / 1 hour</label>
        <select
          name="price"
          value={filters.price}
          onChange={handleFilterChange}
        >
          <option value="">Choose a price</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="60">60</option>
          <option value="70">70</option>
          <option value="80">80</option>
          <option value="90">90</option>
          <option value="100">100</option>
          <option value="110">110</option>
        </select>
      </div>

      <div className={s.filter}>
        <label>Car mileage / km</label>
        <div className={s.input_box}>
          <input
            type="number"
            name="mileageFrom"
            placeholder="From"
            value={filters.mileageFrom}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="mileageTo"
            placeholder="To"
            value={filters.mileageTo}
            onChange={handleFilterChange}
          />
        </div>
      </div>
      <button className={s.search_button} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default Searching;
