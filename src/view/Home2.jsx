import { useState, useEffect } from 'react'
const axios = require('axios')
const instance = axios.create({
  baseURL: 'https://capacitaglobal.org:4000/api',
})
const Home = () => {
  const [valor, setValor] = useState(null)
  const [statusError, setstatusError] = useState(false)

  useEffect(() => {
    instance
      .get('/professor/pending/8')
      // .get('/category/4/children')
      .then(function (response) {
        if (response.status === 200) {
          setValor(response.data)
        } else {
          setstatusError(true)
        }
      })
      .catch(function (error) {
        setstatusError(true)
      })
  }, [])

  if (valor) {
    return (
      <div>
        {valor.map((item) => (
          <div className="">{item.name}</div>
        ))}
      </div>
    )
  } else if (statusError) {
    return <div className="">Error en la petición</div>
  } else {
    return <div className="">Loading...</div>
  }
}

export default Home
