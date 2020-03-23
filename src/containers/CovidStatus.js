/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

import CovidBox from "../components/CovidBox"
import useFetchYemenCovid from "../hooks/useFetchYemenCovid"

export default function CovidStatus() {
  const { data } = useFetchYemenCovid()
  const lastUpdate = data?.lastUpdate
    ? new Intl.DateTimeFormat().format(new Date(data.lastUpdate))
    : ""

  return (
    <section>
      <header sx={{ textAlign: "center", mb: 3 }}>
        <Heading>إحصائيات عالمية للمرض</Heading>
        <p>أخر تحديث: {lastUpdate}</p>
      </header>
      <main sx={{ display: "flex", justifyContent: "space-between" }}>
        <CovidBox
          color="orange"
          status="المصابين"
          count={data?.confirmed?.value}
        />
        <CovidBox color="red" status="المتوفين" count={data?.deaths?.value} />
        <CovidBox
          color="green"
          status="المتعافين"
          count={data?.recovered?.value}
        />
      </main>
    </section>
  )
}
