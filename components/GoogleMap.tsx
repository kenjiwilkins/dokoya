"use client";
import { FC, useState, useEffect } from "react";
import {
  GoogleMap as GM,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { getCurrentLocation } from "@/utils/location";

interface Props {
  apiKey: string;
  username: string;
  imageUrl: string;
}
interface PinIconProps {
  lat: number;
  lng: number;
  imageUrl: string;
  userName: string;
  lastUpdated: string;
}

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const zoom = 14;
interface SelectedInfo {
  lat: number;
  lng: number;
  imageUrl: string;
  userName: string;
  lastUpdated: string;
}
const PinIcon: FC<PinIconProps> = ({
  lat,
  lng,
  imageUrl,
  userName,
  lastUpdated,
}) => {
  const [selected, setSelected] = useState<SelectedInfo | null>(null);
  return (
    <>
      <Marker
        key={`${lat * lng}`}
        position={{
          lat,
          lng,
        }}
        icon={
          imageUrl
            ? {
                url: imageUrl,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(30, 30),
              }
            : undefined
        }
        onClick={() => {
          setSelected({
            lastUpdated,
            lat,
            lng,
            imageUrl,
            userName,
          });
        }}
      />
      {selected && (
        <InfoWindow
          position={{
            lat: selected.lat,
            lng: selected.lng,
          }}
          onCloseClick={() => {
            setSelected(null);
          }}
        >
          <div className="text-black">
            <p className="font-bold">Name: {selected.userName}</p>
            <p className="font-bold">{selected.lastUpdated}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export const GoogleMap: FC<Props> = ({ apiKey, username, imageUrl }) => {
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  const [initialLocation, setInitialLocation] = useState<{
    lat: number;
    lng: number;
  } | null>(null);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCurrentLocation()
      .then((location) => {
        setInitialLocation(location);
        setLocation(location);
        setLastUpdated(new Date().toLocaleString());
      })
      .catch((error) => setError(error.message));
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!location || !initialLocation) {
    return <div>Loading...</div>;
  }
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GM
        mapContainerStyle={containerStyle}
        center={initialLocation}
        zoom={zoom}
        options={{
          disableDefaultUI: true,
        }}
      >
        <PinIcon
          lat={location.lat}
          lng={location.lng}
          imageUrl={imageUrl}
          userName={username}
          lastUpdated={lastUpdated || ""}
        />
      </GM>
    </LoadScript>
  );
};
