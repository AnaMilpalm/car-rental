import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, limit = 12, filters = {} }) => {
    const response = await axios.get(
      "https://car-rental-api.goit.global/cars",
      {
        params: { page, limit, ...filters },
      }
    );
    console.log("Fetched cars data:", response.data); // Дивимось у консоль
    return response.data.cars;
  }
);

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    filters: { brand: "", price: "", mileageFrom: "", mileageTo: "" },
    pagination: { page: 1, limit: 12 },
    status: "idle",
    error: null,
  },
  reducers: {
    setPage: (state, action) => {
      state.pagination.page = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setPage, setFilters } = carsSlice.actions;
export default carsSlice.reducer;
