/** @jsx jsx */
import { Heading, jsx } from "theme-ui"
import { useEffect } from "react"

import firebase from "gatsby-plugin-firebase"

import GatsbyIcon from "../../images/gatsby-icon.png"

export default function Volunteers() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("users")
        .get()
      const mappedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
      console.log({ mappedData })
    }
    fetchData()
  }, [])
  return (
    <section>
      <header sx={{ mt: 5, textAlign: "center" }}>
        <Heading>المتطوعيين</Heading>
      </header>
      <main sx={{ display: "flex" }}>
        {[...Array(5)].map(() => (
          <div
            role="button"
            aria-label="داعم"
            sx={{
              m: 1,
              cursor: "pointer",
              width: 50,
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
