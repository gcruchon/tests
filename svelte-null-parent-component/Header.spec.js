import { render } from '@testing-library/svelte';
import MockLink from './__mocks__/MockLink.svelte';

describe("Header", () => {
  const setupMockModules = () => {
    jest.resetModules();
    const mockedFunctions = {
      Link: MockLink,
    };
    jest.doMock('svelte-routing', () => {
      return {
        __esModule: true,
        default: mockedFunctions,
        ...mockedFunctions,
      };
    });
  };
  it("should not display link by default", async () => {
    setupMockModules();
    await import('svelte-routing');
    const Header = await import('./Header.svelte');
    const { container } = render(Header);
    expect(container).toContainHTML("I'm a header");
  });
  it("should have a Home Link if requested", async () => {
    setupMockModules();
    await import('svelte-routing');
    const Header = await import('./Header.svelte');
    const { container } = render(Header, {
      props: {
        withLinks: true
      },
    });
    expect(container).toContainHTML("Home");
  });
});
