import React from "react"

import Layout from "../layouts/default"
import SEO from "../components/seo"
import CovidStatus from "../containers/CovidStatus"
import Sponsers from "../containers/Sponsers"
import Intro from "../containers/Intro"
import Volunteers from "../containers/Volunteers"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <CovidStatus />
    <Sponsers />
    <Volunteers />
  </Layout>
)

export default IndexPage
