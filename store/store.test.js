import store from "./store";
import { initialSneakerState } from "./mockData";
import { initialClothingState } from "./mockClothingData";

describe("redux state tests", () => {
  it("Should initially set sneaker to an beginning state object", () => {
    const state = store.getState();
    expect(state.sneaker).toEqual(initialSneakerState);
  });

  it("Should initially set clothing to an beginning state object", () => {
    const state = store.getState();
    expect(state.clothing).toEqual(initialClothingState);
  });
});
