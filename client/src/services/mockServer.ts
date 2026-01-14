import { landingMockData } from "../pages/Landing/landing.mock";

export const mockServer = {
  getLandingPageData: async () => {
    await new Promise((res) => setTimeout(res, 400));
    return landingMockData;
  }
};
