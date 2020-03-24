import React, { useState } from "react"
import { Button, Heading } from "theme-ui"
import Drawer from "../components/Drawer"

export default function RequestService() {
  const [open, setOpen] = useState(false)
  const toggleHandler = () => setOpen(!open)
  return (
    <>
      <Drawer
        handler={false}
        placement="right"
        width={500}
        style={{ direction: "rtl" }}
        toggleHandler={toggleHandler}
        open={open}
      >
        <Heading sx={{ pt: 5, px: 3 }}>
          سيتم فتح بوابة الخدمات قريباً...
        </Heading>
      </Drawer>
      <Button onClick={toggleHandler}>طلب خدمة</Button>
    </>
  )
}
