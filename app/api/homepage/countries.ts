import axios from 'axios'

interface country {
  id: number
  name: string
}

const ApiGetCountries = async () => {
  try {
    const response = await axios.get(
      'http://localhost:8080/api/homepage/countries'
    )
    const responseData: country[] = response.data.countries
    return responseData
  } catch (error) {
    console.log("Une erreur s'est produite :", error)
  }
}

export default ApiGetCountries
