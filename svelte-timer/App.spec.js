import { render } from "@testing-library/svelte";
import App from "./App.svelte";
import jestConfig from "./jest.config";


const logThemIn = (context) => jest.fn((count, remaining) => {
  console.log(`[${context}] count=${count} || remaining=${remaining}`);
});

describe("App", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });
  it("should render count down -- using testing library", () => {
    const logThem = logThemIn('Testing Library');
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
  it("should render count down -- using compiled component", () => {
    const logThem = logThemIn('Compiled Component');
    const app = new App({
      target: document.body,
      props: { logThem },
    });
    expect(document.body.innerHTML).toMatch(/Time remaining: 5 sec./);
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
