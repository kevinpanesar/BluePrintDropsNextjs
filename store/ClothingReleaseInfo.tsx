import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import { format } from "date-fns";
import {monthsObj} from '../util/monthSeperator'
import { RootState } from "../store/store";
export const fetchClothingInfo = createAsyncThunk(
  "clothing/fetchClothing",
  async () => {
    let data = await fetch("https://sneaker-mern-app.herokuapp.com/clothing/");
    let jsonData = await data.json();
    return jsonData;
  }
);

const months = {
  January: [{}],
  Febuary: [{}],
  March: [{}],
  April: [{}],
  May: [{}],
  June: [{}],
  July: [{}],
  August: [{}],
  September: [{}],
  October: [{}],
  November: [{}],
  December: [{}],
};
// Slice
const clothingSlice = createSlice({
  name: "clothing",
  initialState: {
    allClothingInfo: [],
    futureMonths: months,
    pastMonths: months,
    currentClothingFeedUpcoming: true,
    futureClothingInfo: [{}],
    pastClothingInfo: [{}],
    pastClothingInfoAgeOrGender: months,
    futureClothingInfoAgeOrGender: months,
    status: null,
    searchTerm: "",
    mensWomensKidsFilterValue: "reset",
    upcomingSelected: true,
    pastSelected: false,
  },
  reducers: {
    splitClothingInfo: (state) => {
      if (state.futureClothingInfo.length === 0) {
        state.allClothingInfo.forEach((element : {date: string}) => {
          const today = new Date();
          today.setDate(today.getDate() - 1);

          const todayDateToTime = today.getTime();
          const releaseDate = new Date(
            element.date.replace(/, /g, "/")
          ).getTime();

          if (todayDateToTime < releaseDate) {
            state.futureClothingInfo.push(element);
          } else {
            state.pastClothingInfo.push(element);
          }
        });
      }
    },
    filterMonths: (state) => {
      let arrayOfMonths = Object.keys(months);
      const emptyArrayObjects = arrayOfMonths.every(
        (element) => state.futureMonths[element as keyof typeof monthsObj].length === 0
      );

      if (emptyArrayObjects) {
        state.futureClothingInfo.map((element : any) => {
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
        state.pastClothingInfo.map((element : any) => {
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
    },
    copyMonthsArray: (state) => {
      state.futureClothingInfoAgeOrGender = state.futureMonths;
      state.pastClothingInfoAgeOrGender = state.pastMonths;
    },
    toggleSneakerFeed: (state) => {
      state.currentClothingFeedUpcoming = !state.currentClothingFeedUpcoming;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    searchFeed: (state, action) => {
      state.futureClothingInfo.filter((element : any) =>
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
  },
});
export default clothingSlice.reducer;

export const {
  splitClothingInfo,
  setSearchTerm,
  searchFeed,
  toggleUpcomingSelected,
  togglePastSelected,
  selectMensWomensKids,
} = clothingSlice.actions;
