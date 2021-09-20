import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSneakerInfo = createAsyncThunk(
  "sneaker/fetchSneaker",
  async () => {
    let data = await fetch("https://sneaker-mern-app.herokuapp.com/posts/");
    let jsonData = await data.json();
    return jsonData;
  }
);

// Slice
const sneakerSlice = createSlice({
  name: "sneaker",
  initialState: {
    allSneakerInfo: [],
    currentSneakerFeedUpcoming: true,
    currentSneakerInfo: undefined,
    futureSneakerInfo: [],
    pastSneakerInfo: [],
    pastSneakerInfoAgeOrGender: [],
    futureSneakerInfoAgeOrGender: [],
    status: null,
    searchTerm: "",
    upcomingSelected: true,
    pastSelected: false,
  },
  reducers: {
    sneakerInfo: (state, action) => {
      state.currentSneakerInfo = action.payload;
    },
    splitSneakerInfo: (state) => {
      if (state.futureSneakerInfo.length === 0) {
        state.allSneakerInfo.forEach((element) => {
          const today = new Date().getTime();
          const releaseDate = new Date(
            element.date.replace(/, /g, "/")
          ).getTime();

          if (today < releaseDate) {
            state.futureSneakerInfo.push(element);
          } else {
            state.pastSneakerInfo.push(element);
          }
        });
      }

      state.futureSneakerInfoAgeOrGender = state.futureSneakerInfo;
      state.pastSneakerInfoAgeOrGender = state.pastSneakerInfo;
    },
    toggleSneakerFeed: (state) => {
      state.currentSneakerFeedUpcoming = !state.currentSneakerFeedUpcoming;
    },
    setCurrentShoe: (state, action) => {
      state.currentSneakerInfo = state.allSneakerInfo[0];
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchFeed: (state, action) => {
      state.futureSneakerInfo.filter((element) =>
        element.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    toggleUpcomingSelected: (state) => {
      state.upcomingSelected = !state.upcomingSelected;
    },
    togglePastSelected: (state) => {
      state.pastSelected = !state.pastSelected;
    },
    selectMensWomensKids: (state, action) => {
      console.log(action.payload);
      if (action.payload === "reset") {
        state.futureSneakerInfoAgeOrGender = state.futureSneakerInfo;
        state.pastSneakerInfoAgeOrGender = state.pastSneakerInfo;
      } else {
        state.futureSneakerInfoAgeOrGender = state.futureSneakerInfo.filter(
          (element) => element[action.payload] === true
        );
        state.pastSneakerInfoAgeOrGender = state.pastSneakerInfo.filter(
          (element) => element[action.payload] === true
        );
      }
    },
  },
  extraReducers: {
    [fetchSneakerInfo.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchSneakerInfo.fulfilled]: (state, action) => {
      if (state.allSneakerInfo.length === 0) {
        state.allSneakerInfo = action.payload;
      }
    },
    [fetchSneakerInfo.rejected]: (state, action) => {
      console.log(action);
    },
  },
});
export default sneakerSlice.reducer;

export const {
  sneakerInfo,
  splitSneakerInfo,
  toggleSneakerFeed,
  setSearchTerm,
  searchFeed,
  toggleUpcomingSelected,
  togglePastSelected,
  selectMensWomensKids,
} = sneakerSlice.actions;
