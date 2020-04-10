/** @jsx jsx */
import { jsx, Heading } from "theme-ui"

import CovidBox from "../components/CovidBox"
import useFetchYemenCovid from "../hooks/useFetchYemenCovid"

export default function CovidStatus({ url, title, style }) {
  const { data } = useFetchYemenCovid({ url })
  const lastUpdate = data?.lastUpdate
    ? new Intl.DateTimeFormat().format(new Date(data.lastUpdate))
    : ""

  return (
    <section sx={style}>
      <header sx={{ textAlign: "center", mb: 3 }}>
        <Heading>{title}</Heading>
        <p>أخر تحديث: {lastUpdate}</p>
      </header>
      <main
        sx={{
          display: "flex",
          justifyContent: ["center", "space-between"],
          flexWrap: ["wrap", "nowrap"],
        }}
      >
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

CovidStatus.defaultProps = {
  url: "https://covid19.mathdro.id/api/",
  title: "إحصائيات عالمية للمرض",
}
