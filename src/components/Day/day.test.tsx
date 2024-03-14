import { defaultSetupBuilder } from "@__tests__/utils/customRender";
import clearDay from "@assets/clear_day.svg";
import { screen } from "@testing-library/react-native";
import { Day, DayProps } from ".";

describe("<Day />", () => {
  const mockProps: DayProps = {
    day: "18/07",
    min: "30C",
    max: "34C",
    icon: clearDay,
    weather: "Céu limpo",
  };

  const setup = defaultSetupBuilder(Day, mockProps);

  it("should be render day", () => {
    const { props } = setup();

    expect(screen.getByText(props.day)).toBeTruthy();
  });
});
