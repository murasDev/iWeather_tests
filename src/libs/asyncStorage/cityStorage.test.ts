import { CityProps } from "@services/getCityByNameService";
import { getStorageCity, removeStorageCity, saveStorageCity } from "./cityStorage";

const newCity: CityProps = {
  id: '1',
  latitude: 123,
  longitude: 456,
  name: "Sorocaba"
}

describe("Libs - AsyncStorage: CityStorage", () => {
  it("should be return null when don't have city storaged.", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should be return city storaged.", async () => {
    const newCity: CityProps = {
      id: '1',
      latitude: 123,
      longitude: 456,
      name: "Sorocaba"
    }

    await saveStorageCity(newCity)
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should be remove city storaged.", async () => {
    await saveStorageCity(newCity)
    await removeStorageCity()
    const response = await getStorageCity();

    expect(response).toBeNull();
  });
})