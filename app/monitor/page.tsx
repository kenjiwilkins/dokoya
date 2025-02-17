"use client";
import { GoogleMap } from "@/components/GoogleMapNoGeolocation";
import { useEffect, useState } from "react";
import axios from "axios";
import { LoadingSpinner } from "@/components/LoadingSpinner";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

export default function MapPage() {
  // states
  const [lat, setLat] = useState<number | null>(null);
  const [lng, setLng] = useState<number | null>(null);
  const [timestamp, setTimestamp] = useState<number | null>(null);

  // function
  async function getUserPosition() {
    try {
      const position = await axios.get("/api/position", {
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
      });
      return position.data as { lat: number; lng: number; timestamp: number };
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }
  async function getCurrentLocation() {
    try {
      const position = await getUserPosition();
      if (!position) {
        console.log("No position received");
        return;
      } else {
        console.log("Position received");
      }
      setLat(position.lat);
      setLng(position.lng);
      setTimestamp(position.timestamp);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  // useEffect
  useEffect(() => {
    const interval = setInterval(async () => {
      await getCurrentLocation();
    }, 10000);
    getCurrentLocation();
    return () => clearInterval(interval);
  }, [getCurrentLocation]);

  return (
    <div>
      {lat && lng && timestamp ? (
        <div className="relative">
          <GoogleMap
            apiKey={apiKey}
            lat={lat}
            lng={lng}
            timestamp={timestamp}
          />
          <button className="fixed bottom-0 right-1/2 m-4 flex translate-x-1/2 gap-2 text-nowrap rounded-full bg-blue-500 px-4 py-2">
            <span className="text-white">Last updated:</span>
            <span className="text-white">
              {new Date(timestamp).toLocaleString()}
            </span>
          </button>
        </div>
      ) : (
        <div className="flex h-screen items-center justify-center">
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}
