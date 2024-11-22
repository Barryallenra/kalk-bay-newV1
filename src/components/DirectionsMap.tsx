import React, { useState, useCallback, useRef, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, DirectionsRenderer, InfoWindow, Autocomplete } from '@react-google-maps/api';
import { MapPin, Navigation, ZoomIn, ZoomOut, Car, Walking, Bike, Bus } from 'lucide-react';
import { toast } from 'sonner';

// Rest of the imports and constants remain the same...

const DirectionsMap = () => {
  // All state and ref declarations remain the same...

  const getTravelModeIcon = (mode: TravelMode) => {
    switch (mode) {
      case 'DRIVING':
        return <Car className="w-5 h-5" />;
      case 'WALKING':
        return <Walking className="w-5 h-5" />;
      case 'BICYCLING':
        return <Bike className="w-5 h-5" />;
      case 'TRANSIT':
        return <Bus className="w-5 h-5" />;
    }
  };

  // Rest of the component implementation remains exactly the same...
};

export default DirectionsMap;