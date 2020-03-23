/** @jsx jsx */
import { Heading, jsx, Link } from "theme-ui"
import { useEffect, useState } from "react"
import isEmpty from "lodash/isEmpty"
import firebase from "gatsby-plugin-firebase"
import { Link as GLink } from "gatsby"
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
      {isEmpty(volunteers) ? (
        <div sx={{ textAlign: "center" }}>
          <Heading>كن او المتطوعيين</Heading>
          <Link as={GLink} to="be/-a-volunteer">
            سجل كمتطوع
          </Link>
        </div>
      ) : (
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
      )}
    </section>
  )
}
