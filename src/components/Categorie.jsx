import { TileCategory } from "./TileCategory";
import "./categorie.css";

export function Categorie({txtcat1, imgCat1, txtcat2, imgCat2, txtcat3, imgCat3, txtcat4, imgCat4}) {
    return (
        <div className="categorie">
            <h2>Categorie</h2>
            <div className="tile-category">
                <TileCategory titleCategory={txtcat1} imageCategory={imgCat1} />
                <TileCategory titleCategory={txtcat2} imageCategory={imgCat2} />
                <TileCategory titleCategory={txtcat3} imageCategory={imgCat3} />
                <TileCategory titleCategory={txtcat4} imageCategory={imgCat4} />
            </div>
        </div>
    )
}