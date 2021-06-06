import Spending from './Spending'
import '../spendings_style/Spendings.css'

const Spendings = ({ spendings }) => {

    let total = 0;
    spendings.forEach(spending => {
        total += Number(spending.value);
    });

    console.log(total)

    return (
        <>
            <h1 className="spending__total">Total spend: {Math.round((total + Number.EPSILON) * 100) / 100}</h1>
            {spendings.map((spending, index) => (
                <Spending 
                key={index} 
                spending={spending} 
                />
            ))}
        </>
    )
}

export default Spendings
