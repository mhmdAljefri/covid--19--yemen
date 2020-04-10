import { useState, useEffect } from "react"

export default ({ url }) => {
  const [error, setStateError] = useState("")
  const [data, setStateData] = useState({})
  const [counter, setCounter] = useState(0)
  const [fetching, setFetching] = useState(true)

  async function getCovidData() {
    setCounter(1)
    const covidOfYemen = await fetch(url)
      .then(res => res.json())
      .catch(err => setStateError(err))
    setStateData(covidOfYemen)
    setFetching(false)
  }

  useEffect(() => {
    if (url && counter <= 0) getCovidData()
  }, [url, fetching])

  return { data, error, fetching }
}
