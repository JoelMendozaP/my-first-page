import { Routes, Route } from 'react-router-dom'
import { Home, Programs, Program } from '../../view'
const Main = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/:pid" element={<Program />} />
      </Routes>
    </>
  )
}

export default Main
