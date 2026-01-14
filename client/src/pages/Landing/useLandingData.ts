import { useEffect, useState } from "react";
import { fetchLandingPageData } from "../../services/landing.api";
import type { LandingPageData } from "./landing.types";

export const useLandingData = () => {
  const [data, setData] = useState<LandingPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLandingPageData().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return { data, loading };
};
