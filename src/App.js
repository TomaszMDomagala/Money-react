import { useState, useEffect } from 'react'
import Spendings from './components/spendings/Spendings'

function App() {
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

  return (
    <div className="Main">
      <Spendings
          spendings={spendings}
      />
    </div>
  );
}

export default App;
