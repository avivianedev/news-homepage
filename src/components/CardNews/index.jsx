import "./CardNews.scss"
import data from "../../data/datanews.json"

export default function CardNews() {

    return (
        <div className="card-container">
            {data.map(item => (
                <div className="card-wrapper">
                    <img key={item.id} src={item.image} alt={item.title} />
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