import './style/TemplateFlex.css'

const TemplateFlex = () => {
  return (
    <div className="TemplateFlex">
      <div className="TemplateFlex__header">Header</div>
      <div className="TemplateFlex__main">
        <div className="TemplateFlex__aside">Aside</div>
        <div className="TemplateFlex__article">
          <div className="TemplateFlex__image">image</div>
          <div className="TemplateFlex__image">image</div>
          <div className="TemplateFlex__image">image</div>
        </div>
      </div>
      <div className="TemplateFlex__footer">Footer</div>
    </div>
  )
}

export default TemplateFlex
