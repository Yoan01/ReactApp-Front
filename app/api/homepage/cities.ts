import axios from 'axios'

interface city {
  id: number
  name: string
  latitude: number
  longitude: number
  countryId: number
}

const ApiGetCities = async () => {
  try {
    const response = await axios.get(
      'http://localhost:8080/api/homepage/cities'
    )
    const responseData: city[] = response.data.cities
    return responseData
  } catch (error) {
    console.log("Une erreur s'est produite :", error)
  }
}

export default ApiGetCities
