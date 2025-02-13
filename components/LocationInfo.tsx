"use client";
import { useState, useEffect } from "react";
import { getCurrentLocation } from "@/utils/location";

export const LocationInfo = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCurrentLocation()
      .then((location) => setLocation(location))
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!location) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
    </div>
  );
};
