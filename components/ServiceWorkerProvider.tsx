"use client";
import { FC, useEffect } from "react";

interface Props {
  children: React.ReactNode;
}

export const ServiceWorkerProvider: FC<Props> = ({ children }) => {
  function handleServiceWorker() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/sw.js")
        .then((registration) => {
          console.log("Service Worker registered:", registration);
        })
        .catch((error) => {
          console.error("Service Worker registration failed:", error);
        });
    }
    navigator.serviceWorker.addEventListener("message", (event) => {
      const { type } = event.data || {};
      if (type === "REQUEST_LOCATION") {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const coords = {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                timestamp: position.timestamp,
              };
              console.log("Sending location to service worker:", coords);
              if (navigator.serviceWorker.controller) {
                navigator.serviceWorker.controller.postMessage({
                  type: "LOCATION_RESPONSE",
                  data: coords,
                });
              } else {
                console.error("No service worker controller found");
              }
            },
            (error) => {
              console.error("Error getting location:", error);
            },
          );
        } else {
          console.error("Geolocation not supported");
        }
      }
    });
  }

  useEffect(() => {
    handleServiceWorker();
  }, []);

  return <>{children}</>;
};
