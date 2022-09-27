import store from "./store";
import { months, setSearchTerm, toggleSneakerFeed } from "./releaseInfo";
import { fetchSneakerInfo } from "./releaseInfo";
import reducer, {
  splitSneakerInfo,
  filterMonths,
  copyMonthsArray,
} from "./releaseInfo";
import mockData, {
  initialSneakerState,
  initialClothingState,
  filteredMonthsMockDataPast,
} from "./mockData";
jest.mock < typeof fetchSneakerInfo > "./__mocks__/releaseInfo";

describe("redux state tests", () => {
  it("Should initially set sneaker to an beginning state object", () => {
    const state = store.getState();
    expect(state.sneaker).toEqual(initialSneakerState);
  });

  it("Should initially set clothing to an beginning state object", () => {
    const state = store.getState();
    expect(state.clothing).toEqual(initialClothingState);
  });

  it("split shoes to future and past", () => {
    expect(
      reducer(
        {
          allSneakerInfo: mockData,
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
        splitSneakerInfo()
      )
    ).toEqual({
      allSneakerInfo: mockData,
      futureMonths: months,
      pastMonths: months,
      currentSneakerFeedUpcoming: true,
      futureSneakerInfo: [],
      pastSneakerInfo: mockData,
      pastSneakerInfoAgeOrGender: months,
      futureSneakerInfoAgeOrGender: months,
      status: null,
      searchTerm: "",
      mensWomensKidsFilterValue: "reset",
      upcomingSelected: true,
      pastSelected: false,
    });
  });

  it("filter shoes into months", () => {
    expect(
      reducer(
        {
          allSneakerInfo: mockData,
          futureMonths: months,
          pastMonths: months,
          currentSneakerFeedUpcoming: true,
          futureSneakerInfo: [],
          pastSneakerInfo: mockData,
          pastSneakerInfoAgeOrGender: months,
          futureSneakerInfoAgeOrGender: months,
          status: null,
          searchTerm: "",
          mensWomensKidsFilterValue: "reset",
          upcomingSelected: true,
          pastSelected: false,
        },
        filterMonths()
      )
    ).toEqual({
      allSneakerInfo: mockData,
      futureMonths: months,
      pastMonths: filteredMonthsMockDataPast,
      currentSneakerFeedUpcoming: true,
      futureSneakerInfo: [],
      pastSneakerInfo: mockData,
      pastSneakerInfoAgeOrGender: months,
      futureSneakerInfoAgeOrGender: months,
      status: null,
      searchTerm: "",
      mensWomensKidsFilterValue: "reset",
      upcomingSelected: true,
      pastSelected: false,
    });
  });

  it("makes a copy of filtered months array into future and past snekaerInfoAgeOrGender state.", () => {
    expect(
      reducer(
        {
          allSneakerInfo: mockData,
          futureMonths: months,
          pastMonths: filteredMonthsMockDataPast,
          currentSneakerFeedUpcoming: true,
          futureSneakerInfo: [],
          pastSneakerInfo: mockData,
          pastSneakerInfoAgeOrGender: months,
          futureSneakerInfoAgeOrGender: months,
          status: null,
          searchTerm: "",
          mensWomensKidsFilterValue: "reset",
          upcomingSelected: true,
          pastSelected: false,
        },
        copyMonthsArray()
      )
    ).toEqual({
      allSneakerInfo: mockData,
      futureMonths: months,
      pastMonths: filteredMonthsMockDataPast,
      currentSneakerFeedUpcoming: true,
      futureSneakerInfo: [],
      pastSneakerInfo: mockData,
      pastSneakerInfoAgeOrGender: filteredMonthsMockDataPast,
      futureSneakerInfoAgeOrGender: months,
      status: null,
      searchTerm: "",
      mensWomensKidsFilterValue: "reset",
      upcomingSelected: true,
      pastSelected: false,
    });
  });

  it("toggles between upcoming and past sneakers", () => {
    expect(
      reducer(
        {
          allSneakerInfo: mockData,
          futureMonths: months,
          pastMonths: filteredMonthsMockDataPast,
          currentSneakerFeedUpcoming: true,
          futureSneakerInfo: [],
          pastSneakerInfo: mockData,
          pastSneakerInfoAgeOrGender: filteredMonthsMockDataPast,
          futureSneakerInfoAgeOrGender: months,
          status: null,
          searchTerm: "",
          mensWomensKidsFilterValue: "reset",
          upcomingSelected: true,
          pastSelected: false,
        },
        toggleSneakerFeed()
      )
    ).toEqual({
      allSneakerInfo: mockData,
      futureMonths: months,
      pastMonths: filteredMonthsMockDataPast,
      currentSneakerFeedUpcoming: false,
      futureSneakerInfo: [],
      pastSneakerInfo: mockData,
      pastSneakerInfoAgeOrGender: filteredMonthsMockDataPast,
      futureSneakerInfoAgeOrGender: months,
      status: null,
      searchTerm: "",
      mensWomensKidsFilterValue: "reset",
      upcomingSelected: true,
      pastSelected: false,
    });
  });

  it("sets search term to filter results", () => {
    expect(
      reducer(
        {
          allSneakerInfo: mockData,
          futureMonths: months,
          pastMonths: filteredMonthsMockDataPast,
          currentSneakerFeedUpcoming: true,
          futureSneakerInfo: [],
          pastSneakerInfo: mockData,
          pastSneakerInfoAgeOrGender: filteredMonthsMockDataPast,
          futureSneakerInfoAgeOrGender: months,
          status: null,
          searchTerm: "",
          mensWomensKidsFilterValue: "reset",
          upcomingSelected: true,
          pastSelected: false,
        },
        setSearchTerm("test")
      )
    ).toEqual({
      allSneakerInfo: mockData,
      futureMonths: months,
      pastMonths: filteredMonthsMockDataPast,
      currentSneakerFeedUpcoming: true,
      futureSneakerInfo: [],
      pastSneakerInfo: mockData,
      pastSneakerInfoAgeOrGender: filteredMonthsMockDataPast,
      futureSneakerInfoAgeOrGender: months,
      status: null,
      searchTerm: "test",
      mensWomensKidsFilterValue: "reset",
      upcomingSelected: true,
      pastSelected: false,
    });
  });
});
