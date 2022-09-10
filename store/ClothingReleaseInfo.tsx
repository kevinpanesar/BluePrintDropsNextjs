import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { RootState } from "./store";

export const fetchClothingInfo = createAsyncThunk(
  "clothing/fetchClothing",
  async () => {
    let data = await fetch(
      "https://sneaker-mern-app.herokuapp.com/for-sale-listings"
    );
    let jsonData = await data.json();43
    return jsonData;
  }
);

export const fetchCart = createAsyncThunk("clothing/fetchCart", async (uid : any) => {
  let data = await fetch(
    `https://sneaker-mern-app.herokuapp.com/cart?uid=${uid}`
  );
  let jsonData = await data.json();
  return jsonData;
});

export const removeItemsFromCart = createAsyncThunk("clothing/removeItemsFromCart", async (dataObj: any) => {
  const config = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dataObj),
  };
  let data = await fetch(
    `https://sneaker-mern-app.herokuapp.com/removeFromCart`, config
  );
  let jsonData = await data.json();
  return jsonData;
});

export const updateInventory = createAsyncThunk("clothing/updateInventory", async (dataObj: any) => {
  const options = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(dataObj),
  };
  let data = await fetch('http://localhost:3000/updateInventory', options);
  let jsonData = await data.json();
  return jsonData;
});

// Slice
const clothingSlice = createSlice({
  name: "clothing",
  initialState: {
    allClothingInfo: [],
    filteredResults: [],
    cart: [],
    status: null,
    searchTerm: "",
    mensWomensKidsFilterValue: "reset",
  },
  reducers: {
    ClothingInfo: (state : RootState, action) => {
      state.currentClothingInfo = action.payload;
    },
    copyFilteredArray: (state) => {
      state.filteredResults = state.allClothingInfo;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchFeed: (state : RootState, action) => {
      state.filteredResults.filter((element : any) =>
        element.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    selectMensWomensKids: (state, action) => {
      if (action.payload === "reset") {
        state.mensWomensKidsFilterValue = "reset";
      } else if (action.payload === "mensFlag") {
        state.mensWomensKidsFilterValue = "mensFlag";
      } else if (action.payload === "womensFlag") {
        state.mensWomensKidsFilterValue = "womensFlag";
      } else if (action.payload === "kidsFlag") {
        state.mensWomensKidsFilterValue = "kidsFlag";
      }
    },
  },
  extraReducers: {
    [fetchClothingInfo.pending.toString()]: (state : RootState) => {
      state.status = "loading";
    },
    [fetchClothingInfo.fulfilled.toString()]: (state : RootState, action : any) => {
      if (state.allClothingInfo.length === 0) {
        state.allClothingInfo = action.payload;
      }
    },
    [fetchClothingInfo.rejected.toString()]: (state : RootState, action : any) => {
      console.log(action);
    },
    [fetchCart.pending.toString().toString()]: (state: RootState) => {
      state.status = "loading";
    },
    [fetchCart.fulfilled.toString()]: (state : RootState, action : any) => {
      state.cart = action.payload;
    },
    [fetchCart.rejected.toString()]: (action : any) => {
      console.log(action);
    },
    [removeItemsFromCart.pending.toString()]: (state: RootState) => {
      state.status = "loading";
    },
    [removeItemsFromCart.fulfilled.toString()]: (state : RootState, action : any) => {
      console.log(action)
    },
    [removeItemsFromCart.rejected.toString()]: (action : any) => {
      console.log(action);
    },
    [updateInventory.pending.toString()]: (state: RootState) => {
      state.status = "loading";
    },
    [updateInventory.fulfilled.toString()]: (state : RootState, action : any) => {
      console.log(action)
    },
    [updateInventory.rejected.toString()]: (action : any) => {
      console.log(action);
    }
  },
});
export default clothingSlice.reducer;

export const { ClothingInfo, setSearchTerm, searchFeed, selectMensWomensKids } =
  clothingSlice.actions;
