import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, filters = {} }) => {
    console.log("Передаємо у запит:", {
      ...filters,
      rentalPrice: filters.price,
    });

    const response = await axios.get(
      "https://car-rental-api.goit.global/cars",
      {
        params: { page, limit, rentalPrice: filters.price, ...filters },
      }
    );

    const allCars = response.data.cars;

    return allCars.filter((car) => {
      return (
        (!filters.brand || car.brand === filters.brand) &&
        (!filters.price || car.rentalPrice <= parseInt(filters.price)) &&
        (!filters.mileageFrom ||
          car.mileage >= parseInt(filters.mileageFrom)) &&
        (!filters.mileageTo || car.mileage <= parseInt(filters.mileageTo))
      );
    });
    // console.log("Fetched cars data:", response.data); // Дивимось у консоль
    // return response.data.cars;
  }
);

const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    filters: { brand: "", price: "", mileageFrom: "", mileageTo: "" },
    favorites: initialFavorites,
    pagination: { page: 1, limit: 12 },
    status: "idle",
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      const index = state.favorites.findIndex((id) => id === carId);
      if (index > -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(carId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        if (state.pagination.page === 1) {
          state.cars = action.payload;
        } else {
          state.cars = [...state.cars, ...action.payload];
        }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPage, setFilters, toggleFavorite } = carsSlice.actions;
export default carsSlice.reducer;
