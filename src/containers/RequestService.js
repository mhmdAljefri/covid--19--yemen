import React, { useState } from "react"
import { Button, Heading } from "theme-ui"
import Drawer from "../components/Drawer"

export default function RequestService() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Drawer
        handler={false}
        placement="right"
        width={500}
        style={{ direction: "rtl" }}
        onClose={() => setOpen(false)}
        open={open}
      >
        <Heading sx={{ pt: 5, px: 3 }}>
          سيتم فتح بوابة الخدمات قريباً...
        </Heading>
      </Drawer>
      <Button onClick={() => setOpen(true)}>طلب خدمة</Button>
    </>
  )
}
