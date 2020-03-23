import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import CovidStatus from "../containers/CovidStatus"
import Sponsers from "../containers/Sponsers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <CovidStatus />
    <Sponsers />
  </Layout>
)

export default IndexPage
