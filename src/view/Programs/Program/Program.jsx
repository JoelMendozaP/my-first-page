import { useParams } from 'react-router-dom'
const Program = (props) => {
  const { pid } = useParams()
  console.log(pid)
  return <div style={{ background: 'orange' }}>Program</div>
}

export default Program
