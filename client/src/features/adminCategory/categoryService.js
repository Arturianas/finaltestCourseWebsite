import axios from 'axios'

// const API_URL = 'http://localhost:5000/api/v2/course'

// Register user
const createCategory = async (categoryData) => {
    console.log('ok I am here')
  const response = await axios.post('/categories', categoryData)

  if (response.data) {
    // localStorage.setItem('user', JSON.stringify(response.data))
    console.log(response.data)
  }

  return response.data
}

// Login user
// const login = async (userData) => {
//   const response = await axios.post('login', userData)

//   if (response.data) {
//     localStorage.setItem('user', JSON.stringify(response.data))
//   }

//   return response.data
// }

// Logout user
// const logout = () => {
//   localStorage.removeItem('user')
// }

const categoryService = {
  createCategory
}

export default categoryService