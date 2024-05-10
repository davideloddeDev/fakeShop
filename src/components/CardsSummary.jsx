import "./cardSummary.css"

export function CardSummary({imgSource, title, description, price}) {
  return (
    <div className="card-summary">
      <img
          className="card-image"
          src={imgSource}
          alt={title}
        />
        <div className="summary-item">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
          <p className="card-price">{price}</p>
        </div>
      
    </div>
  );
}
