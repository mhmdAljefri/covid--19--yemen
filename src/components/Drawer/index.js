import React from "react"
import RcDrawer from "rc-drawer"
import "rc-drawer/assets/index.css"

export default function Drawer({
  children,
  toggleHandler,
  closeButtonStyle,
  closeButton,
  drawerHandler,
  open,
  ...props
}) {
  return (
    <React.Fragment>
      <RcDrawer
        open={open}
        onClose={toggleHandler}
        style={{ direction: "ltr" }}
        {...props}
      >
        <div
          className="reusecore-drawer__close"
          onClick={toggleHandler}
          style={closeButtonStyle}
        >
          {closeButton}
        </div>
        {children}
      </RcDrawer>

      <div
        className="reusecore-drawer__handler"
        style={{ display: "inline-block" }}
        onClick={toggleHandler}
      >
        {drawerHandler}
      </div>
    </React.Fragment>
  )
}
