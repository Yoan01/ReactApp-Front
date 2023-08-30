import { useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useRouter } from 'next/navigation'

const Map = () => {
  const [geoData, setGeoData] = useState({ lat: 46.2192649, lng: 2.0517 })
  const [geoDataMarkers, setGeoDataMarkers] = useState([
    { id: 1, lat: 49.8987918, lng: 2.2022809, ville: 'Amiens', url: '/amiens' },
    { id: 2, lat: 47.478419, lng: -0.563166, ville: 'Angers', url: '/angers' },
    {
      id: 3,
      lat: 44.837789,
      lng: -0.57918,
      ville: 'Bordeaux',
      url: '/bordeaux',
    },
    {
      id: 4,
      lat: 45.777222,
      lng: 3.087025,
      ville: 'Clermont-Ferrand',
      url: '/clermont-ferrand',
    },
    { id: 5, lat: 47.323, lng: 5.04148, ville: 'Dijon', url: '/dijon' },
    {
      id: 6,
      lat: 45.187561,
      lng: 5.735781,
      ville: 'Grenoble',
      url: '/grenoble',
    },
    {
      id: 7,
      lat: 46.160329,
      lng: -1.151139,
      ville: 'La Rochelle',
      url: '/la-rochelle',
    },
    { id: 8, lat: 50.62925, lng: 3.057256, ville: 'Lille', url: '/lille' },
    { id: 9, lat: 45.835424, lng: 1.262625, ville: 'Limoges', url: '/limoges' },
    { id: 10, lat: 45.757813, lng: 4.832011, ville: 'Lyon', url: '/lyon' },
    {
      id: 11,
      lat: 43.296482,
      lng: 5.36978,
      ville: 'Marseille',
      url: '/marseille',
    },
    {
      id: 12,
      lat: 43.611015,
      lng: 3.877612,
      ville: 'Montpellier',
      url: '/montpellier',
    },
    {
      id: 13,
      lat: 47.749903,
      lng: 7.339399,
      ville: 'Mulhouse',
      url: '/mulhouse',
    },
    { id: 14, lat: 47.218371, lng: -1.553621, ville: 'Nantes', url: '/nantes' },
    { id: 15, lat: 43.70313, lng: 7.26608, ville: 'Nice', url: '/nice' },
    {
      id: 16,
      lat: 47.907715,
      lng: 1.904205,
      ville: 'Orléans',
      url: '/orleans',
    },
    { id: 17, lat: 48.856613, lng: 2.352222, ville: 'Paris', url: '/paris' },
    {
      id: 18,
      lat: 42.698601,
      lng: 2.895622,
      ville: 'Perpignan',
      url: '/perpignan',
    },
    { id: 19, lat: 49.258329, lng: 4.031696, ville: 'Reims', url: '/reims' },
    { id: 20, lat: 48.113475, lng: -1.675708, ville: 'Rennes', url: '/rennes' },
    { id: 21, lat: 49.443232, lng: 1.099971, ville: 'Rouen', url: '/rouen' },
    {
      id: 22,
      lat: 48.573405,
      lng: 7.752111,
      ville: 'Strasbourg',
      url: '/strasbourg',
    },
    {
      id: 23,
      lat: 43.604652,
      lng: 1.444209,
      ville: 'Toulouse',
      url: '/toulouse',
    },
    { id: 24, lat: 47.394144, lng: 0.70387, ville: 'Tours', url: '/tours' },
  ])

  const [hoveredMarker, setHoveredMarker] = useState(0)
  const router = useRouter()

  return (
    <>
      <MapContainer
        center={[geoData.lat, geoData.lng]}
        zoom={5}
        scrollWheelZoom={false}
        style={{
          height: '360px',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {geoDataMarkers.map((marker) => {
          const isHovered = hoveredMarker === marker.id
          const iconSize: any = isHovered ? [40, 40] : [26, 26]

          const customIcon = new Icon({
            iconUrl: './gpsIcon.png',
            iconSize: iconSize,
          })

          return (
            <Marker
              key={marker.id}
              position={[marker.lat, marker.lng]}
              icon={customIcon}
              eventHandlers={{
                mouseover: () => {
                  setHoveredMarker(marker.id)
                },
                mouseout: () => {
                  setHoveredMarker(0)
                },
                click: () => {
                  router.push(`${marker.url}`)
                },
              }}
            ></Marker>
          )
        })}
      </MapContainer>
      <div className="grid grid-rows-6 grid-flow-col gap-5 pt-8">
        {geoDataMarkers.map((markerName) => {
          return (
            <span className="text-base" key={markerName.id}>
              {markerName.ville}
            </span>
          )
        })}
      </div>
    </>
  )
}

export default Map
