import { render } from "@testing-library/svelte";
import App from "./App.svelte";

jest.useFakeTimers();
const logThem = jest.fn((count, remaining) =>
  console.log(`count=${count} || remaining=${remaining}`)
);

describe("App", () => {
  it("should render count down", () => {
    const { container } = render(App, { props: { logThem } });
    expect(container).toContainHTML("Time remaining: 5 sec.");
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
    jest.advanceTimersByTime(1000);
    expect(logThem).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(1000);
    expect(logThem).toHaveBeenCalledTimes(2);
    jest.advanceTimersByTime(1000);
    expect(logThem).toHaveBeenCalledTimes(3);
    jest.advanceTimersByTime(1000);
    expect(logThem).toHaveBeenCalledTimes(4);
    jest.advanceTimersByTime(1000);
    expect(logThem).toHaveBeenCalledTimes(5);
    const fifthCall = logThem.mock.calls[4];
    const count = fifthCall[0];
    const remaining = fifthCall[1];
    expect(count).toEqual(5);
    expect(remaining).toEqual(1);
  });
});
