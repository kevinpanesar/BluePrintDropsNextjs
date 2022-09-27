import store from "./store";
import {
  months,
  setSearchTerm,
  togglePastSelected,
  toggleSneakerFeed,
  selectMensWomensKids
} from "./releaseInfo";
import { fetchSneakerInfo } from "./releaseInfo";
import reducer, {
  splitSneakerInfo,
  filterMonths,
  copyMonthsArray,
} from "./releaseInfo";
import mockData, { filteredMonthsMockDataPast } from "./mockData";
jest.mock < typeof fetchSneakerInfo > "./__mocks__/releaseInfo";

describe("Release Info reducer tests", () => {
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

  it("toggles between past sneakers selected as true or false", () => {
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
        togglePastSelected()
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
      pastSelected: true,
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

  it("Sets filter for results, between mens womens and kids", () => {
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
        selectMensWomensKids("mensFlag")
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
      mensWomensKidsFilterValue: "mensFlag",
      upcomingSelected: true,
      pastSelected: false,
    });
  });
});
