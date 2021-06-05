import './spendings_style/Spendings.css'

const Spending = ({ spending }) => {

    console.log(spending)

    return (
        <div className="spending__item">
            <div className="spending__header">
                <h2>{spending.title}</h2>
                <h2>{spending.value}</h2>
            </div>
            <div className="spending__description">
                <p>{spending.date}</p>
            </div>
        </div>
    )
}

export default Spending
