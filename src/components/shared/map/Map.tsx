import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
} from '@vis.gl/react-google-maps';
import { handleMarkerClick } from '../../../utils';

import { Container } from './styles';

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

function MapComponent() {
  if (!GOOGLE_MAPS_API_KEY) {
    console.error('Google Maps API key is missing.');
    return null;
  }

  return (
    <Container>
      <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
        <Map
          mapId='51a0bcbfd9b2d20f'
          defaultZoom={15}
          defaultCenter={{ lat: 41.7851, lng: 44.8226 }}
          streetViewControl={false}
        />
        <AdvancedMarker
          position={{ lat: 41.7851, lng: 44.8226 }}
          title={'გობრონიძის ქუჩა 25ბ.'}
          onClick={handleMarkerClick}
        >
          <Pin background='#0f527c' borderColor='#0f527c' glyphColor='#ffff' />
        </AdvancedMarker>
      </APIProvider>
    </Container>
  );
}

export default MapComponent;
