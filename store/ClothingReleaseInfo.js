import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { format } from "date-fns";

export const fetchClothingInfo = createAsyncThunk(
  "clothing/fetchClothing",
  async () => {
    let data = await fetch(
      "https://sneaker-mern-app.herokuapp.com/for-sale-listings"
    );
    let jsonData = await data.json();
    return jsonData;
  }
);

export const fetchCart = createAsyncThunk("clothing/fetchCart", async (uid) => {
  let data = await fetch(
    `https://sneaker-mern-app.herokuapp.com/cart?uid=${uid}`
  );
  let jsonData = await data.json();
  return jsonData;
});

export const removeItemsFromCart = createAsyncThunk("clothing/fetchCart", async (uid,name, email, cartItem) => {
  const config = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uid: uid,
      name: name,
      email: email,
      cartItem: cartItem
    }),
  };
  let data = await fetch(
    `https://sneaker-mern-app.herokuapp.com/removeFromCart`, config
  );
  let jsonData = await data.json();
  return jsonData;
});

// Slice
const clothingSlice = createSlice({
  name: "clothing",
  initialState: {
    allClothingInfo: [],
    cart: [],
    status: null,
    searchTerm: "",
    mensWomensKidsFilterValue: "reset",
  },
  reducers: {
    ClothingInfo: (state, action) => {
      state.currentClothingInfo = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchFeed: (state, action) => {
      state.futureClothingInfo.filter((element) =>
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
    [fetchClothingInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchClothingInfo.fulfilled]: (state, action) => {
      if (state.allClothingInfo.length === 0) {
        state.allClothingInfo = action.payload;
      }
    },
    [fetchClothingInfo.rejected]: (state, action) => {
      console.log(action);
    },
    [fetchCart.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchCart.fulfilled]: (state, action) => {
      state.cart = action.payload;
    },
    [fetchCart.rejected]: (state, action) => {
      console.log(action);
    },
    // [removeItemsFromCart.pending]: (state, action) => {
    //   state.status = "loading";
    // },
    // [removeItemsFromCart.fulfilled]: (state, action) => {
    //   console.log(action);
    // },
    // [removeItemsFromCart.rejected]: (state, action) => {
    //   console.log(action);
    // },
  },
});
export default clothingSlice.reducer;

export const { clothingInfo, setSearchTerm, searchFeed, selectMensWomensKids } =
  clothingSlice.actions;
