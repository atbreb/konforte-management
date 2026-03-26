import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useEffect, useRef } from "react";
import L from "leaflet";

// Fix Leaflet default marker icons not loading in bundled apps
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

function InvalidateSizeOnVisible({ locations }: { locations: { lat: number; lng: number }[] }) {
  const map = useMap();
  const containerRef = useRef(map.getContainer());
  const hasFitBounds = useRef(false);

  useEffect(() => {
    const container = containerRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          map.invalidateSize();

          // Auto-fit bounds to show all markers when multiple locations
          if (!hasFitBounds.current && locations.length > 1) {
            const bounds = L.latLngBounds(
              locations.map((l) => [l.lat, l.lng] as [number, number])
            );
            map.fitBounds(bounds, { padding: [40, 40] });
            hasFitBounds.current = true;
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [map, locations]);

  return null;
}

interface Location {
  lat: number;
  lng: number;
  title: string;
  address?: string;
}

interface PropertyMapProps {
  locations: Location[];
  className?: string;
  zoom?: number;
  center?: { lat: number; lng: number };
}

export function PropertyMap({ locations, className, zoom, center }: PropertyMapProps) {
  const defaultCenter = center || {
    lat: locations.reduce((sum, l) => sum + l.lat, 0) / locations.length,
    lng: locations.reduce((sum, l) => sum + l.lng, 0) / locations.length,
  };

  const defaultZoom = zoom || (locations.length === 1 ? 15 : 11);

  return (
    <div className={className} style={{ minHeight: "300px", position: "relative", zIndex: 0 }}>
      <MapContainer
        center={[defaultCenter.lat, defaultCenter.lng]}
        zoom={defaultZoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
      >
        <InvalidateSizeOnVisible locations={locations} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.title} position={[loc.lat, loc.lng]}>
            <Popup>
              <strong>{loc.title}</strong>
              {loc.address && <br />}
              {loc.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
