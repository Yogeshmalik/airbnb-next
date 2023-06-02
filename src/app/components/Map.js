import Map from "react-map-gl";

export default function MyMap() {
  return (
    <Map
      mapStyle="mapbox://styles/yogeshsm/cli4vyfxj00pz01pnfx6gh4hr"
      mapboxAccessToken={process.env.mapbox_key}
    ></Map>
  );
}
