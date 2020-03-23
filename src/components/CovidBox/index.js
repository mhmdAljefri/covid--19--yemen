/** @jsx jsx */
import { jsx } from "theme-ui"

export default function CovidBox({ status, count, color }) {
  return (
    <div
      sx={{
        color,
        borderRadius: 25,
        backgroundColor: "muted",
        width: 250,
        textAlign: "center",
        paddingTop: 50,
        mx: 10,
      }}
    >
      <h2>{status}</h2>
      <p>{count}</p>
    </div>
  )
}
