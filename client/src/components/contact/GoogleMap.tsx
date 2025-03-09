import { useEffect, useRef } from 'react';

interface GoogleMapProps {
  address: string;
  height?: string;
}

const GoogleMap = ({ address, height = "100%" }: GoogleMapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Load Google Maps API script
    const loadGoogleMapsScript = () => {
      if (!document.querySelector('script[src*="maps.googleapis.com/maps/api/js"]')) {
        const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '';
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.defer = true;
        script.onload = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    // Initialize the map
    const initMap = () => {
      if (window.google && mapRef.current) {
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address }, (results, status) => {
          if (status === 'OK' && results && results[0]) {
            const map = new window.google.maps.Map(mapRef.current, {
              center: results[0].geometry.location,
              zoom: 15,
            });
            
            new window.google.maps.Marker({
              map,
              position: results[0].geometry.location,
              title: 'Everspark Technologies',
            });
          } else {
            console.error('Geocode was not successful for the following reason:', status);
            // Fallback to a default location if geocoding fails
            if (mapRef.current) {
              const defaultLocation = { lat: 40.712776, lng: -74.005974 }; // New York
              const map = new window.google.maps.Map(mapRef.current, {
                center: defaultLocation,
                zoom: 15,
              });
              
              new window.google.maps.Marker({
                map,
                position: defaultLocation,
                title: 'Everspark Technologies',
              });
            }
          }
        });
      }
    };

    loadGoogleMapsScript();
    
    return () => {
      // Clean up if needed
    };
  }, [address]);

  return (
    <div className="bg-white p-2 rounded-lg shadow-md overflow-hidden" style={{ height }}>
      <div ref={mapRef} className="w-full h-full bg-gray-200">
        <div className="flex items-center justify-center h-full text-gray-500">
          <span>Loading Google Maps...</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleMap;
