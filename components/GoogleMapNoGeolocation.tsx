"use client";
import { FC, useState } from "react";
import {
  GoogleMap as GM,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";

interface Props {
  apiKey: string;
  lat: number;
  lng: number;
  timestamp: number;
}
interface PinIconProps {
  lat: number;
  lng: number;
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
  lastUpdated: string;
}
const PinIcon: FC<PinIconProps> = ({ lat, lng, lastUpdated }) => {
  const [selected, setSelected] = useState<SelectedInfo | null>(null);
  return (
    <>
      <Marker
        key={`${lat * lng}`}
        position={{
          lat,
          lng,
        }}
        onClick={() => {
          setSelected({
            lastUpdated,
            lat,
            lng,
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
            <p className="font-bold">{selected.lastUpdated}</p>
          </div>
        </InfoWindow>
      )}
    </>
  );
};

export const GoogleMap: FC<Props> = ({ apiKey, lat, lng, timestamp }) => {
  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GM
        mapContainerStyle={containerStyle}
        center={{
          lat,
          lng,
        }}
        zoom={zoom}
        options={{
          disableDefaultUI: true,
        }}
      >
        <PinIcon
          lat={lat}
          lng={lng}
          lastUpdated={
            timestamp === 0
              ? "No timestamp"
              : new Date(timestamp).toLocaleString()
          }
        />
      </GM>
    </LoadScript>
  );
};
