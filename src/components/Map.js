import React,{memo} from "react";
import { useState, useCallback } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";

function Map() {

  const [viewport, setViewport] = useState({
    latitude: 10.823099,
    longitude: 106.629664,
    zoom: 10,
  });
  const handleViewportChange = useCallback(
    (newViewport) => setViewport(newViewport),
    []
  );

  return (
    <MapContainer className="map-container">
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxApiAccessToken="pk.eyJ1IjoibXVua3lsbyIsImEiOiJja3Y0Z3VtcXcwc2J5MnZvMDh6dTFpdXkyIn0.xrq6kmFbRaexkdXGpGwwSQ"
        {...viewport}
        width="100%"
        height="580px"
        onViewportChange={handleViewportChange}
      >
        <Marker className="marker__wrapper"
         
          longitude={106.629664}
          latitude={10.823099}
        >
          <MdLocationOn />
          <p>Côg ty TNHH MONA MEDIA</p>
        </Marker>
      </ReactMapGL>
    </MapContainer>
  );
}

const MapContainer = styled.section`
  width: 100%;
  height: 100%;
  .marker__wrapper{
    display: flex;
    align-items: center;
  }
  svg {
    color: red;
    font-size: 2rem;
  }
  p{
    color: red;
    font-size: 1.2rem;
    width: 160px;
  }
`;
export default memo(Map);
