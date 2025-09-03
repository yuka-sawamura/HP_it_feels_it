import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  // 八戸市妙の位置（例：緯度40.5089, 経度141.4894）
  const position = { lat: 40.4854, lng: 141.5455 };

  return (
    <div
      style={{
        width: "90%",
        maxWidth: "800px",
        height: "clamp(280px, 55vw, 420px)",
        margin: "0 auto",
      }}
    >
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
        <Map
          center={position}
          zoom={15}
          gestureHandling={"greedy"}
          disableDefaultUI={false}
        >
          <Marker position={position} />
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
