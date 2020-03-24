/** @jsx jsx */
import { Link as ThemedLink, jsx, Heading } from "theme-ui"
import PropTypes from "prop-types"
import { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Global, css } from "@emotion/core"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Header from "../components/header"
import "./layout.css"
import Nav from "../components/Nav"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Fragment>
      <ToastContainer />
      <Header>
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            a: {
              textDecoration: "none",
              display: "inline-block",
            },
          }}
        >
          <ThemedLink variant="links.nav" as={Link} to="/">
            {data.site.siteMetadata.title}
          </ThemedLink>
          <Nav />
        </div>
      </Header>
      <div
        dir="rtl"
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <Global
          styles={css`
            @import url("https://fonts.googleapis.com/css?family=Tajawal&display=swap");

            html {
              font-family: "Tajawal", sans-serif;
            }
          `}
        />
        <main>{children}</main>
        <footer sx={{ pt: 5 }}>
          <Heading sx={{ textAlign: "center", mb: 3 }}>للتواصل</Heading>
          <a
            sx={{ display: "block", textAlign: "center" }}
            href="mailto:me@mhmdaljefri.dev"
          >
            me@mhmdaljefri.dev
          </a>
          <a
            sx={{ display: "block", textAlign: "center", direction: "ltr" }}
            href="tel://00967739590989"
          >
            +967 73 959 0 989
          </a>
          <p sx={{ mb: 2, textAlign: "center", mt: 2 }}>
            بني بكل{" "}
            <span sx={{ color: "red" }} role="img" ari-label="قلب">
              ❤
            </span>{" "}
            في أَم المدن عدن
          </p>
        </footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
