import { useState, useEffect } from "react"

export default (url = "https://covid19.mathdro.id/api/") => {
  const [error, setStateError] = useState("")
  const [data, setStateData] = useState({})
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    async function getCovidData() {
      const covidOfYemen = await fetch(url)
        .then(res => res.json())
        .catch(err => setStateError(err))
      setStateData(covidOfYemen)
      setFetching(false)
    }
    getCovidData()
  }, [url])

  return { data, error, fetching }
}
