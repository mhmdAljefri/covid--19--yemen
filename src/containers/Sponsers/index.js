/** @jsx jsx */
import { Heading, jsx, Link } from "theme-ui"
import { useState, useEffect } from "react"
import { Link as GLink } from "gatsby"
import isEmpty from "lodash/isEmpty"
import firebase from "gatsby-plugin-firebase"

export default function Sponsers() {
  const [sponsers, setSponsers] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("sponsers")
        .get()
      setSponsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])

  return (
    <section>
      <header sx={{ mt: 5, textAlign: "center" }}>
        <Heading>الداعمين</Heading>
      </header>
      {isEmpty(sponsers) ? (
        <div sx={{ textAlign: "center" }}>
          <Heading>كن او الداعمين</Heading>
          <Link as={GLink} to="be/-a-volunteer">
            سجل كداعم
          </Link>
        </div>
      ) : (
        <main sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
          {sponsers.map(user => (
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
              {user.name}
            </div>
          ))}
        </main>
      )}
    </section>
  )
}
