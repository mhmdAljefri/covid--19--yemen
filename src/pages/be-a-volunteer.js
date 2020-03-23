import React, { useEffect } from "react"
import { Link } from "gatsby"
import firebase from "gatsby-plugin-firebase"

import Layout from "../layouts/default"
import SEO from "../components/seo"

function BeAVolunteer() {
  useEffect(() => {
    const fetchData = async () => {
      firebase
        .firestore()
        .collection("users")
        .get()
        .then(ref => {
          console.log("Added document with ID: ", ref)
        })
    }
    fetchData()
  }, [])
  return (
    <Layout>
      <SEO title="كن متطوع" />
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default BeAVolunteer
