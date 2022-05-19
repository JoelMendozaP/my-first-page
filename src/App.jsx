import './assets/styles/style.css'
import './App.css'
// import TemplateFlex from './components/template/TemplateFlex'
import TemplateGrid from './components/template/TemplateGrid'
import { BrowserRouter } from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <TemplateFlex /> */}
        <TemplateGrid />
      </BrowserRouter>
    </div>
  )
}

export default App
