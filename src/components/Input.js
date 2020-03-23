import React from "react"
import { Input as ThemedInput } from "theme-ui"

export default function Input({ label, name, ...props }) {
  return (
    <div>
      <div>
        <label htmlFor={name}>{label}</label>
      </div>
      <ThemedInput {...props} name={name} />
    </div>
  )
}
