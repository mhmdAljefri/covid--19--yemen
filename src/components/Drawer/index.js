import React from "react"
import RcDrawer from "rc-drawer"
import "rc-drawer/assets/index.css"
import { Button } from "theme-ui"

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
        onHandleClick={toggleHandler}
        open={open}
        onClose={toggleHandler}
        style={{ direction: "ltr" }}
        {...props}
      >
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
