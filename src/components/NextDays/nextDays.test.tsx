import clearDay from "@assets/clear_day.svg";
import { render, screen } from "@testing-library/react-native";
import { NextDays } from ".";

describe("Component: NextDays", () => {
  it("should be render next days.", () => {
    render(
      <NextDays
        data={[
          {
            day: "18/07",
            min: "30C",
            max: "34C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "19/07",
            min: "30C",
            max: "34C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "20/07",
            min: "30C",
            max: "34C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "21/07",
            min: "30C",
            max: "34C",
            icon: clearDay,
            weather: "Céu limpo",
          },
          {
            day: "22/07",
            min: "30C",
            max: "34C",
            icon: clearDay,
            weather: "Céu limpo",
          },
        ]}
      />,
    );
    expect(screen.getByText("19/07")).toBeTruthy();
  });
});
