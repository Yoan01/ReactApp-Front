import { useState, useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContainer, Marker, TileLayer } from 'react-leaflet'
import { Icon } from 'leaflet'
import { useRouter } from 'next/navigation'
import ApiGetCities from '../api/homepage/cities'

interface city {
  id: number
  name: string
  latitude: number
  longitude: number
  countryId: number
}

const Map = () => {
  const [cities, setCities] = useState<city[] | null>(null) // État local pour stocker les données

  useEffect(() => {
    // Utilisez useEffect pour appeler la fonction handleApiRequest lors du chargement de la page
    async function fetchData() {
      try {
        const responseData = await ApiGetCities()
        if (responseData !== undefined) {
          setCities(responseData) // Mettez à jour l'état avec les données récupérées
        }
      } catch (error) {
        console.error(
          "Une erreur s'est produite lors de la récupération des données :",
          error
        )
      }
    }

    fetchData()
  }, [])

  const [geoDataCenter, setGeoDataCenter] = useState({
    lat: 46.2192649,
    lng: 2.0517,
  })
  const [hoveredMarker, setHoveredMarker] = useState(0)
  const router = useRouter()

  return (
    <>
      <MapContainer
        center={[geoDataCenter.lat, geoDataCenter.lng]}
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

        {cities?.map((city) => {
          const isHovered = hoveredMarker === city.id
          const iconSize: any = isHovered ? [40, 40] : [26, 26]

          const customIcon = new Icon({
            iconUrl: './gpsIcon.png',
            iconSize: iconSize,
          })

          return (
            <Marker
              key={city.id}
              position={[city.latitude, city.longitude]}
              icon={customIcon}
              eventHandlers={{
                mouseover: () => {
                  setHoveredMarker(city.id)
                },
                mouseout: () => {
                  setHoveredMarker(0)
                },
                click: () => {
                  router.push(`/${city.name}`)
                },
              }}
            ></Marker>
          )
        })}
      </MapContainer>
      <div className="grid grid-rows-6 grid-flow-col gap-5 pt-8">
        {cities?.map((city) => {
          return (
            <span className="text-base" key={city.id}>
              {city.name}
            </span>
          )
        })}
      </div>
    </>
  )
}

export default Map
