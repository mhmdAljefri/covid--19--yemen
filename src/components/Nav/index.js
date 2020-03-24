import React, { useState, useEffect } from "react"

import { Link as ThemedLink, Box } from "theme-ui"
import { Link } from "gatsby"

import RequestService from "../../containers/RequestService"
import Drawer from "../Drawer"

export default function Nav() {
  const [mobileView, setMobileView] = useState(true)
  const [open, setOpen] = useState(false)

  const toggleHandler = () => setOpen(!open)

  const mobileViewSizeHandler = () => setMobileView(window.innerWidth < 600)

  useEffect(() => {
    if (typeof window !== undefined) {
      mobileViewSizeHandler()

      window.addEventListener("resize", mobileViewSizeHandler)
      return () => window.removeEventListener("resize", mobileViewSizeHandler)
    }
  })

  console.log({ mobileView })
  const navButtons = (
    <Box
      as="nav"
      sx={{
        minWidth: 300,
        display: "flex",
        alignItems: "center",
        flexDirection: ["column", "row"],
      }}
    >
      <RequestService />
      <ThemedLink sx={{ mx: 10, my: [20, 0] }} as={Link} to="be-a-volunteer">
        المشاركة كمتطوع
      </ThemedLink>
      <ThemedLink as={Link} to="be-a-sponser">
        دعم المشروع
      </ThemedLink>
    </Box>
  )
  return (
    <>
      {mobileView ? (
        <Drawer toggleHandler={toggleHandler} placement="right" open={open}>
          <Box sx={{ p: 4 }}>{navButtons}</Box>
        </Drawer>
      ) : (
        navButtons
      )}
    </>
  )
}
