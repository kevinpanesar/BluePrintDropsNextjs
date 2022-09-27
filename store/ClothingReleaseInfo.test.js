import reducer, {
  copyFilteredArray,
  setSearchTerm,
  selectMensWomensKids,
} from "./ClothingReleaseInfo";
import { clothingMockData } from "./mockClothingData";

describe("Release Info reducer tests", () => {
  it("makes a copy of filtered array.", () => {
    expect(
      reducer(
        {
          allClothingInfo: clothingMockData,
          filteredResults: [],
          cart: [],
          status: null,
          searchTerm: "",
          mensWomensKidsFilterValue: "reset",
        },
        copyFilteredArray()
      )
    ).toEqual({
      allClothingInfo: clothingMockData,
      filteredResults: clothingMockData,
      cart: [],
      status: null,
      searchTerm: "",
      mensWomensKidsFilterValue: "reset",
    });
  });

  it("sets search term to filter results", () => {
    expect(
      reducer(
        {
          allClothingInfo: [],
          filteredResults: [],
          cart: [],
          status: null,
          searchTerm: "",
          mensWomensKidsFilterValue: "reset",
        },
        setSearchTerm("test")
      )
    ).toEqual({
      allClothingInfo: [],
      filteredResults: [],
      cart: [],
      status: null,
      searchTerm: "test",
      mensWomensKidsFilterValue: "reset",
    });
  });

  it("Sets filter for results, between mens womens and kids", () => {
    expect(
      reducer(
        {
          allClothingInfo: [],
          filteredResults: [],
          cart: [],
          status: null,
          searchTerm: "",
          mensWomensKidsFilterValue: "reset",
        },
        selectMensWomensKids("mensFlag")
      )
    ).toEqual({
      allClothingInfo: [],
      filteredResults: [],
      cart: [],
      status: null,
      searchTerm: "",
      mensWomensKidsFilterValue: "mensFlag",
    });
  });
});
