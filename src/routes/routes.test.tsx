import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherApiResponse";
import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { api } from "@services/api";
import { CityProps } from "@services/getCityByNameService";
import { Routes } from ".";

describe("Routes", () => {
  it("should be render Search screen when not city selected.", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));

    expect(title).toBeTruthy();
  });

  it("should be render Dashboard when has city selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const newCity: CityProps = {
      id: "1",
      latitude: 123,
      longitude: 456,
      name: "Sorocaba",
    };

    await saveStorageCity(newCity);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(newCity.name);

    expect(title).toBeTruthy();
  });
});
