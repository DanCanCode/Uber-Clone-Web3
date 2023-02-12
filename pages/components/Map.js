import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZGFuY2FuY29kZSIsImEiOiJjbGRyem1kNXQxZ2hrM3F1dTVmenVqYXp6In0.XRKSWq6Cy5z_fw8-OVnkjQ";

const Map = ({ pickup, dropoff }) => {
  useEffect(() => {
    // const mapFocus = dropoff && dropoff.length ? dropoff : [-73.8326, 40.7963];
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-73.8326, 40.7963],
      zoom: 8.32,
    });

    if (pickup && pickup.length && dropoff && dropoff.length) {
      addToMap(map, pickup);
      addToMap(map, dropoff);

      map.fitBounds([dropoff, pickup], {
        padding: 100,
      });
    }
  }, [pickup, dropoff]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map" />;
};

export default Map;

const Wrapper = tw.div`
  flex-1
  h-full
  w-full
`;
