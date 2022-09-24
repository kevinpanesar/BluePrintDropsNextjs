import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { format } from "date-fns";
import { RootState } from "./store";

export const fetchSneakerInfo = createAsyncThunk(
  "sneaker/fetchSneaker",
  async () => {
    let data = await fetch("https://sneaker-mern-app.herokuapp.com/shoes/");
    let jsonData = await data.json();
    return jsonData;
  }
);

export const months = {
  January: [],
  Febuary: [],
  March: [],
  April: [],
  May: [],
  June: [],
  July: [],
  August: [],
  September: [],
  October: [],
  November: [],
  December: [],
};
// Slice
const sneakerSlice: any = createSlice({
  name: "sneaker",
  initialState: {
    allSneakerInfo: [],
    futureMonths: months,
    pastMonths: months,
    currentSneakerFeedUpcoming: true,
    futureSneakerInfo: [],
    pastSneakerInfo: [],
    pastSneakerInfoAgeOrGender: months,
    futureSneakerInfoAgeOrGender: months,
    status: null,
    searchTerm: "",
    mensWomensKidsFilterValue: "reset",
    upcomingSelected: true,
    pastSelected: false,
  },
  reducers: {
    sneakerInfo: (state : RootState, action) => {
      state.currentSneakerInfo = action.payload;
    },
    splitSneakerInfo: (state : RootState) => {
      if (state.futureSneakerInfo.length === 0) {
        state.allSneakerInfo.forEach((element : {date: string}) => {
          const today = new Date();
          today.setDate(today.getDate() - 1);

          const todayDateToTime = today.getTime();
          const releaseDate = new Date(
            element.date.replace(/, /g, "/")
          ).getTime();

          if (todayDateToTime < releaseDate) {
            state.futureSneakerInfo.push(element);
          } else {
            state.pastSneakerInfo.push(element);
          }
        });
      }
    },
    filterMonths: (state : RootState) => {
      let arrayOfMonths = Object.keys(months);
      const emptyArrayObjects = arrayOfMonths.every(
        (element) => state.futureMonths[element].length === 0
      );

      if (emptyArrayObjects) {
        state.futureSneakerInfo?.map((element : {date: string}) => {
          const date = element.date.replace(/, /g, "/");
          const month = format(new Date(date), "LLLL");
          if (month == "January") {
            state.futureMonths.January.push(element);
          } else if (month == "Febuary") {
            state.futureMonths.Febuary.push(element);
          } else if (month == "March") {
            state.futureMonths.March.push(element);
          } else if (month == "April") {
            state.futureMonths.April.push(element);
          } else if (month == "May") {
            state.futureMonths.May.push(element);
          } else if (month == "June") {
            state.futureMonths.June.push(element);
          } else if (month == "July") {
            state.futureMonths.July.push(element);
          } else if (month == "August") {
            state.futureMonths.August.push(element);
          } else if (month == "September") {
            state.futureMonths.September.push(element);
          } else if (month == "October") {
            state.futureMonths.October.push(element);
          } else if (month == "November") {
            state.futureMonths.November.push(element);
          } else if (month == "December") {
            state.futureMonths.December.push(element);
          }
        });
      }
      if (emptyArrayObjects) {
        state.pastSneakerInfo?.map((element : {date: string}) => {
          const date = element.date.replace(/, /g, "/");
          const month = format(new Date(date), "LLLL");
          if (month == "January") {
            state.pastMonths.January.push(element);
          } else if (month == "Febuary") {
            state.pastMonths.Febuary.push(element);
          } else if (month == "March") {
            state.pastMonths.March.push(element);
          } else if (month == "April") {
            state.pastMonths.April.push(element);
          } else if (month == "May") {
            state.pastMonths.May.push(element);
          } else if (month == "June") {
            state.pastMonths.June.push(element);
          } else if (month == "July") {
            state.pastMonths.July.push(element);
          } else if (month == "August") {
            state.pastMonths.August.push(element);
          } else if (month == "September") {
            state.pastMonths.September.push(element);
          } else if (month == "October") {
            state.pastMonths.October.push(element);
          } else if (month == "November") {
            state.pastMonths.November.push(element);
          } else if (month == "December") {
            state.pastMonths.December.push(element);
          }
        });
      }

      console.log(current(state.futureMonths));
      console.log(current(state.pastMonths));
    },
    copyMonthsArray: (state) => {
      state.futureSneakerInfoAgeOrGender = state.futureMonths;
      state.pastSneakerInfoAgeOrGender = state.pastMonths;
    },
    toggleSneakerFeed: (state) => {
      state.currentSneakerFeedUpcoming = !state.currentSneakerFeedUpcoming;
    },
    setCurrentShoe: (state : RootState, action) => {
      state.currentSneakerInfo = state.allSneakerInfo[0];
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchFeed: (state, action) => {
      state.futureSneakerInfo.filter((element : {title: string}) =>
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
    [fetchSneakerInfo.pending.toString()]: (state : RootState, action) => {
      state.status = "loading";
    },
    [fetchSneakerInfo.fulfilled.toString()]: (state, action) => {
      if (state.allSneakerInfo.length === 0) {
        state.allSneakerInfo = action.payload;
      }
    },
    [fetchSneakerInfo.rejected.toString()]: (state, action) => {
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
