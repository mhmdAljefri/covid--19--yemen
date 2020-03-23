/** @jsx jsx */
import PropTypes from "prop-types"
import { jsx } from "theme-ui"

const Header = ({ children }) => (
  <header
    sx={{
      backgroundColor: `background`,
      marginBottom: `1.45rem`,
      borderBottom: "1px solid #eee",
    }}
  >
    <div
      sx={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      {children}
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
