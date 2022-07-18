export default function Card(props){
    return(
        <div className="card">
            <img className="card--image" src={props.item.imageUrl} alt={props.item.title}></img>
            <div className="card--details">
                <h5>{props.item.location}</h5>
                <a href={props.item.googleMapsUrl}>view on Google Maps</a>
                <h1 className="card--location">{props.item.location}</h1>
                <h4 className="card--timeline">
                    {`${props.item.startDate} - ${props.item.endDate}`}
                </h4>
                <p className="card--description">{props.item.description}</p>
            </div>
        </div>
    )
}