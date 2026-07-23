function FeatureItem({icone, text, title}) {
  return (
    <div className="feature-item">
      <img src={icone} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{text}</p>
    </div>
  )
}
export default FeatureItem