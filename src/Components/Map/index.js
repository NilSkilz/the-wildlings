import React, { useRef, useState, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

export default function Map() {
  mapboxgl.accessToken =
    "pk.eyJ1Ijoic3RldmFnZSIsImEiOiJGcW03aExzIn0.QUkUmTGIO3gGt83HiRIjQw";
  // "pk.eyJ1IjoiZWRnZWxxIiwiYSI6ImNramp2d3F4ZTA2Ym8zMG1qOHdhYmY4eTIifQ.tSzlXIs6SabPBQpur3iTKg";

  const mapContainer = useRef(null);
  const map = useRef(null);
  const pointsLayer = useRef();
  const [zoom, setZoom] = useState(10);

  const lat = 50.781349;
  const lng = -4.2944981;

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom,
      attributionControl: false,
    });
  });

  useEffect(() => {
    if (!map.current) return; // wait for map to initialize
    map.current.on("move", () => {
      setZoom(map.current.getZoom().toFixed(2));
    });
    map.current.on("load", () => {
      if (!pointsLayer.current) {
        pointsLayer.current = map.current
          ?.addSource("Points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [],
            },
          })
          .getSource("Points");
        map.current.addLayer({
          id: "Points",
          type: "circle",
          source: "Points",
          paint: {
            "circle-radius": 10,
            "circle-color": "#007cbf",
          },
        });
      }
    });
  });

  return (
    <div>
      <div
        ref={mapContainer}
        style={{ marginTop: "-30px", height: "300px", width: "100%" }}
      />
      <img
        style={{ width: "20px", position: "relative", zIndex: 1 }}
        src="/images/map.png"
      />
    </div>
  );
}
