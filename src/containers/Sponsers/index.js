/** @jsx jsx */
import { Heading, jsx } from "theme-ui"

import GatsbyIcon from "../../images/gatsby-icon.png"

export default function Sponsers() {
  return (
    <section>
      <header sx={{ mt: 5, textAlign: "center" }}>
        <Heading>الداعمين</Heading>
      </header>
      <main sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
        {[...Array(5)].map(() => (
          <div
            role="button"
            aria-label="داعم"
            sx={{
              cursor: "pointer",
              width: 100,
              filter: "grayscale(.5)",
              opacity: 0.5,
              transition: "all 400ms",
              ":hover": {
                filter: "grayscale(0)",
                opacity: 1,
              },
            }}
          >
            <img src={GatsbyIcon} alt="داعم" />
          </div>
        ))}
      </main>
    </section>
  )
}
