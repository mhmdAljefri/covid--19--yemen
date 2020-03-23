/** @jsx jsx */
import { jsx, Select } from "theme-ui"

export default function Governorate() {
  return (
    <div sx={{ marginInlineEnd: 10 }}>
      <div>
        <label htmlFor="governorate">المحافظة</label>
      </div>
      <Select
        sx={{
          minWidth: 150,
          "+ svg": {
            marginInlineStart: -28,
            marginLeft: 0,
          },
        }}
        name="governorate"
      >
        <option>عدن</option>
        <option>حضرموت</option>
      </Select>
    </div>
  )
}
