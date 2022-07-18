import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map((item)=>{
        return(
            <Card>
                item = {item}
            </Card>
        )
    })
    return(
        <div className="container">
            <Header></Header>
            <section className="card--list">
                {cards}
            </section>
        </div>
    )
}