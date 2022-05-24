import { useState } from 'react'
const axios = require('axios')
const instance = axios.create({
  baseURL: 'https://capacitaglobal.org:4000/api',
})
const Home = () => {
  const [valor, setValor] = useState(null)

  function handlePost() {
    instance({
      method: 'post',
      url: '/auth/login',
      data: {
        UsernameOrEmail: 'joelsaludable@gmail.com',
        password: '1234',
      },
    }).then(function (response) {
      console.log(response)
      if (response.status === 200) {
        setValor(response.data.user.email)
      }
    })
  }

  return (
    <div>
      <button onClick={handlePost}>Llamar a un post</button>
      <h3>{valor}</h3>
    </div>
  )
}

export default Home
