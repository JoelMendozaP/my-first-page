import './style/TemplateGrid.css'
import Main from './Main'
import Navbar from './Navbar'
const TemplateGrid = () => {
  return (
    <div className="TemplateGrid">
      <div className="TemplateGrid__navbar">
        <Navbar />
      </div>
      <div className="TemplateGrid__header">Header</div>
      <div className="TemplateGrid__main">
        <Main />
      </div>
      <div className="TemplateGrid__footer">Footer</div>
    </div>
  )
}

export default TemplateGrid
