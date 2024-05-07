import "./tile.css";


export function TileCategory({ titleCategory, imageCategory}) {

const styleDiv = {
    
    background: "url(" + imageCategory + ")",
}

  return (

    <div className="divCategory" style={styleDiv}>
        <h2>{titleCategory}</h2>
    </div>
  )
}
