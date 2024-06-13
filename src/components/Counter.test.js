import Counter from "./Counter";
import { render, fireEvent } from "@testing-library/react";

describe(Counter, () => {
  it("counter displays correct initial count", () => {
    const { getByTestId } = render(<Counter initalCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toEqual(0);
  });
  it("counter should increment by 1 if increment button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initalCount={0} />);
    const incrementBtn = getByRole("button", { name: "Increment" });

    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incrementBtn);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toEqual(1);
  });
  it("counter should decrement by 1 if decrement button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initalCount={0} />);
    const decrementBtn = getByRole("button", { name: "Decrement" });
    expect(Number(getByTestId("count").textContent)).toEqual(0);
    fireEvent.click(decrementBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(-1);
  });
  it("counter should be 0 if restart button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initalCount={50} />);
    const restartBtn = getByRole("button", { name: "Restart" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(restartBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(0);
  });
  it("counter should switch signs if switch sign button is clicked", () => {
    const { getByTestId, getByRole } = render(<Counter initalCount={50} />);
    const switchSignBtn = getByRole("button", { name: "Switch Signs" });
    expect(Number(getByTestId("count").textContent)).toEqual(50);
    fireEvent.click(switchSignBtn);
    expect(Number(getByTestId("count").textContent)).toEqual(-50);
  });
});
