/** @jsx jsx */
import { Heading, jsx } from "theme-ui"
import { useEffect, useState } from "react"

import firebase from "gatsby-plugin-firebase"

export default function Volunteers() {
  const [volunteers, setVolunteers] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const data = await firebase
        .firestore()
        .collection("users")
        .get()
      setVolunteers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    fetchData()
  }, [])
  return (
    <section>
      <header sx={{ mt: 5, textAlign: "center" }}>
        <Heading>المتطوعيين</Heading>
      </header>
      <main sx={{ display: "flex" }}>
        {volunteers.map(user => (
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
            {user.name}
          </div>
        ))}
      </main>
    </section>
  )
}
