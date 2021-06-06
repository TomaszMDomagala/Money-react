import { useState, useEffect } from 'react'
import Spendings from './Spendings'
import AddSpending from './AddSpending'

const SpendingComponent = () => {
    const [spendings, setSpendings] = useState([])

    useEffect(() => {
        const getSpendings = async () => {
        const spendingsFromServer = await fetchSpendings()
        setSpendings(spendingsFromServer)
    }

    getSpendings()
    }, [])

    const fetchSpendings = async () => {
        const res = await fetch('http://127.0.0.1:8000/spending/api/spendings/')
        const data = await res.json()

        return data
    }

    const addSpending = async (spending) => {
        const res = await fetch('http://127.0.0.1:8000/spending/api/spendings/', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(spending),
        })
    
        const data = await res.json()
    
        setSpendings([...spendings, data])
      }

    return (
        <div>
            <AddSpending  onAdd={addSpending}/>
            <Spendings
                spendings={spendings}
            />
        </div>
    )
}

export default SpendingComponent
