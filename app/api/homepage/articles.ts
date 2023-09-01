import axios from 'axios'

interface article {
  id: number
  img: string
  title: string
  link: string
  text: string
}

const ApiGetArticles = async () => {
  try {
    const response = await axios.get(
      'http://localhost:8080/api/homepage/articles'
    )
    const responseData: article[] = response.data.articles
    return responseData
  } catch (error) {
    console.log("Une erreur s'est produite :", error)
  }
}

export default ApiGetArticles
