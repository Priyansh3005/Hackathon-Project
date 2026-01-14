import { mockServer } from "./mockServer";
import type { LandingPageData } from "../pages/Landing/landing.types";

export const fetchLandingPageData = async (): Promise<LandingPageData> => {
  return mockServer.getLandingPageData();
};
