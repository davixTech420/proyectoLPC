import { useEffect, useRef } from "react";
import leaflet from "leaflet";
import useLocalStorage from "../../../hooks/useLocalStorage";
import useGeolocation from "../../../hooks/useGeolocation";

export default function Map() {
  const mapContainerRef = useRef(null); // Referencia al contenedor del mapa
  const mapRef = useRef(null); // Referencia a la instancia del mapa
  const userMarkerRef = useRef(null);

  const [userPosition, setUserPosition] = useLocalStorage("USER_MARKER", {
    latitude: 0,
    longitude: 0,
  });
  const [nearbyMarkers, setNearbyMarkers] = useLocalStorage(
    "NEARBY_MARKERS",
    []
  );
  const location = useGeolocation();
  useEffect(() => {
    // Inicializa el mapa solo si no está ya inicializado
    if (!mapRef.current && mapContainerRef.current) {
      mapRef.current = leaflet
        .map(mapContainerRef.current)
        .setView([userPosition.latitude, userPosition.longitude], 13);

      leaflet
        .tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
          maxZoom: 19,
          attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        })
        .addTo(mapRef.current);

      nearbyMarkers.forEach(({ latitude, longitude }) => {
        leaflet
          .marker([latitude, longitude])
          .addTo(mapRef.current)
          .bindPopup(
            `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
          );
      });

      mapRef.current.on("click", (e) => {
        const { lat: latitude, lng: longitude } = e.latlng;
        leaflet
          .marker([latitude, longitude])
          .addTo(mapRef.current)
          .bindPopup(
            `lat: ${latitude.toFixed(2)}, long: ${longitude.toFixed(2)}`
          );

        setNearbyMarkers((prevMarkers) => [
          ...prevMarkers,
          { latitude, longitude },
        ]);
      });
    }

    // Cleanup del mapa cuando el componente se desmonte
    return () => {
      if (mapRef.current) {
        mapRef.current.off(); // Elimina todos los listeners de eventos
        mapRef.current.remove(); // Elimina la instancia del mapa
        mapRef.current = null;
      }
    };
  }, [nearbyMarkers, userPosition.latitude, userPosition.longitude]);

  useEffect(() => {
    if (mapRef.current) {
      setUserPosition({ ...userPosition });

      if (userMarkerRef.current) {
        mapRef.current.removeLayer(userMarkerRef.current);
      }

      userMarkerRef.current = leaflet
        .marker([location.latitude, location.longitude])
        .addTo(mapRef.current)
        .bindPopup("User");

      const el = userMarkerRef.current.getElement();
      if (el) {
        el.style.filter = "hue-rotate(120deg)";
      }

      mapRef.current.setView([location.latitude, location.longitude]);
    }
  }, [location, setUserPosition]);

  return <div id="map" ref={mapContainerRef} style={{  width: "100%", height: "100%", borderRadius:20, marginInline:10 ,marginBottom:5 }}></div>;
}
