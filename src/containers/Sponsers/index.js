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
        <div sx={{ textAlign: "center", pt: 3 }}>
          <Link as={GLink} to="/be-a-sponser">
            كن اول الداعمين
          </Link>
        </div>
      ) : (
        <main sx={{ display: "flex", justifyContent: "space-evenly", mt: 5 }}>
          {sponsers.map(user => (
            <div
              key={user.id}
              role="button"
              aria-label="داعم"
              sx={{
                cursor: "pointer",
                maxWidth: 200,
                minWidth: 100,
                textAlign: "center",
                filter: "grayscale(.5)",
                opacity: 0.5,
                transition: "all 400ms",
                ":hover": {
                  filter: "grayscale(0)",
                  opacity: 1,
                },
              }}
            >
              <div
                sx={{
                  width: 100,
                  height: 100,
                  borderRadius: 100,
                  mb: 2,
                  backgroundColor: "primary",
                }}
              />
              <p>{user.name}</p>
            </div>
          ))}
        </main>
      )}
    </section>
  )
}
