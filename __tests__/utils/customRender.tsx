import { CityProvider } from "@contexts/CityContext";
import { RenderOptions, render } from "@testing-library/react-native";
import { JSXElementConstructor, ReactElement } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaProvider>
      <CityProvider>{children}</CityProvider>
    </SafeAreaProvider>
  );
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: Providers, ...options });

function defaultSetupBuilder<T>(Comp: JSXElementConstructor<T>, mockProps: T) {
  return (overrides: T | {} = {}) => {
    const props = { ...mockProps, ...overrides };
    const utils = render(<Comp {...props} />);

    return { ...utils, props };
  };
}

function customRendertSetupBuilder<T>(
  Comp: JSXElementConstructor<T>,
  mockProps: T,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return (overrides: T | {} = {}) => {
    const props = { ...mockProps, ...overrides };
    const utils = customRender(<Comp {...props} />, options);

    return { ...utils, props };
  };
}

export * from "@testing-library/react-native";

export {
  Providers,
  customRendertSetupBuilder,
  defaultSetupBuilder,
  customRender as render,
};
