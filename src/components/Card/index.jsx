import "./Card.scss"
import data from "../../data/datanews.json"

export default function Card() {

    return (
        <div className="card-container">
            {data.map(item => (
                <div className="card-wrapper">
                    <div className="card-image">
                        <img key={item.id} src={item.image} alt={item.title} />
                    </div>
                    <div className="card-content">
                        <h3>{item.id}</h3>
                        <a href="">{item.title}</a>
                        <p>{item.description}</p>
                    </div>
                </div>

            ))}

        </div>
    )
}