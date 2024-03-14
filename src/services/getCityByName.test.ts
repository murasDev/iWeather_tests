import { mockCityApiResponse } from '@__tests__/mocks/api/mockCityApiResponse';
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";

describe("Service: getCityByName", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockCityApiResponse });

    const response = await getCityByNameService(mockCityApiResponse.name)

    expect(response.length).toBeGreaterThan(0)
  })
})