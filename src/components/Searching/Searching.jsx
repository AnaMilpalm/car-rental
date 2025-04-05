import { useDispatch } from "react-redux";
import { setFilters, fetchCars } from "../../redux/carsSlice";
import { useState } from "react";
import s from "./Searching.module.css";

const Searching = () => {
  const dispatch = useDispatch();
  const [localFilters, setLocalFilters] = useState({
    brand: "",
    price: "",
    mileageFrom: "",
    mileageTo: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    dispatch(setFilters(localFilters));
    dispatch(fetchCars({ page: 1, limit: 12, filters: localFilters }));
    setLocalFilters({ brand: "", price: "", mileageFrom: "", mileageTo: "" });
  };

  return (
    <div className={s.search_box}>
      <div className={s.filter}>
        <label>Car brand</label>
        <select
          name="brand"
          value={localFilters.brand}
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
          value={localFilters.price}
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
            value={localFilters.mileageFrom}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="mileageTo"
            placeholder="To"
            value={localFilters.mileageTo}
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
