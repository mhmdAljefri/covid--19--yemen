/** @jsx jsx */
import { Link as ThemedLink, jsx, Button } from "theme-ui"
import PropTypes from "prop-types"
import { Fragment } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Global, css } from "@emotion/core"

import Header from "../components/header"
import "./layout.css"
import AuthButton from "../containers/AuthButton"

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
          <nav>
            <Button>طلب خدمة</Button>
            <ThemedLink sx={{ mx: 10 }} as={Link} to="be-a-volunteer">
              المشاركة كمتطوع
            </ThemedLink>
            <ThemedLink as={Link} to="be-a-sponser">
              دعم المشروع
            </ThemedLink>
          </nav>
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
        <footer></footer>
      </div>
    </Fragment>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
