const VERSION = "1.4.0-beta.2";

self.addEventListener("install", (event) => {
  console.log("Service Worker installing.");
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker activating.");
  setInterval(async () => {
    const allClients = await self.clients.matchAll({
      includeUncontrolled: true,
    });
    allClients.forEach((client) => {
      client.postMessage({ type: "REQUEST_LOCATION" });
    });
  }, 10000);
});

self.addEventListener("message", (event) => {
  const { type, data } = event.data || {};
  if (type === "LOCATION_RESPONSE") {
    console.log("Location response:", data);
    fetch("/api/position", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => console.log("Location sent successfully:", result))
      .catch((error) => console.error("Failed to send location:", error));
  } else {
    console.error("Unknown message type:", type);
  }
});
