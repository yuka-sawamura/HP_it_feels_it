import React from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  // 八戸市妙の位置（例：緯度40.5089, 経度141.4894）
  const position = { lat: 40.4854, lng: 141.5455 };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}>
        <Map
          defaultCenter={position}
          defaultZoom={15}
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
