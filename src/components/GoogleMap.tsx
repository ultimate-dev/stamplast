import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
import Tilt from "react-parallax-tilt";

class GoogleMapProps {
  lat?: string | number;
  lng?: string | number;
  google: any;
}
const GoogleMap = ({ lat = 0, lng = 0, google = null }: GoogleMapProps) => {
  return (
    <Tilt className="relative rounded overflow-hidden shadow lg:h-72 h-60 w-full" tiltMaxAngleY={8} tiltMaxAngleX={10}>
      <Map
        google={google}
        initialCenter={{
          lat: parseFloat(String(lat)),
          lng: parseFloat(String(lng)),
        }}
        style={{ height: "100%", width: "100%" }}
        // @ts-ignore
        zoom={12}
      >
        <Marker
          // @ts-ignore
          name="Stamplast"
        />
      </Map>
    </Tilt>
  );
};
export default GoogleApiWrapper({
  apiKey: "",
})(GoogleMap);
