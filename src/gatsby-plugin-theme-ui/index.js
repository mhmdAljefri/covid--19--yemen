export default {
  initialColorMode: "lite",
  useCustomProperties: true,
  colors: {
    text: "#555",
    heading: "#000",
    background: "#fff",
    primary: "#0072ff",
    secondary: "#a0c",
    accent: "#f0a",
    light: "#f9f9f9",
    muted: "#f6f6ff",
    gray: "#444",
    lightgray: "#cfcfd3",
    black: "black",
    white: "white",
  },
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
  },
  sizes: {
    wide: 1280,
  },
  shadows: {
    small: `0 0 0px 1px rgba(0, 0, 0, 0.25)`,
  },
  buttons: {
    big: {
      variant: "buttons.primary",
      px: 4,
      py: 3,
      fontSize: 3,
    },
    outline: {
      variant: "buttons.primary",
      color: "primary",
      bg: "transparent",
      boxShadow: "inset 0 0 0 2px",
    },
    transparent: {
      color: "inherit",
      bg: "transparent",
      ":hover,:focus": {
        color: "primary",
        outline: "none",
        boxShadow: "0 0 0 2px",
      },
    },
  },
  text: {
    heading: {
      fontFamily: '"Tajawal", sans-serif',
      color: t => t.colors.heading,
      a: {
        color: "inherit",
        textDecoration: "none",
        ":hover": {
          textDecoration: "underline",
        },
      },
    },
  },
  variants: {
    badge: {
      display: "inline-block",
      px: 2,
      color: "background",
      bg: "primary",
      borderRadius: "circle",
    },
    card: {
      boxShadow: t => `0 0 10px 2px ${t.colors.muted}`,
      ":hover,:focus": {
        boxShadow: t => `0 0 10px 8px ${t.colors.muted}`,
      },
    },
    links: {
      nav: {
        color: "text",
        opacity: 1,
        transition: "color .2s ease-out",
        ":hover,:focus": {
          color: "secondary",
        },
      },
    },
    footer: {
      backgroundColor: t => t.colors.white,
      color: t => t.colors.text,
      paddingBottom: 50,
      a: {
        color: t => t.colors.gray,
        ":hover": {
          color: t => t.colors.text,
        },
      },
    },
  },
  styles: {
    a: {
      color: "primary",
      transition: "color .2s ease-out",
      ":hover,:focus": {
        color: "secondary",
      },
    },
    inlineCode: {
      fontFamily: "monospace",
      fontSize: "93.75%",
      color: "secondary",
    },
    code: {
      fontFamily: "monospace",
      color: "secondary",
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      overflowX: "auto",
      bg: "muted",
      p: 3,
      borderRadius: 4,
    },
    blockquote: {
      p: 0,
      mx: 0,
      fontWeight: "bold",
      fontSize: 3,
    },
    h1: {
      variant: "text.heading",
      mt: 0,
      fontSize: [5, 6],
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 5],
    },
    h3: {
      variant: "text.heading",
      fontSize: 3,
    },
    h4: { variant: "text.heading" },
    h5: { variant: "text.heading" },
    h6: { variant: "text.heading" },
    table: {
      width: "100%",
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    th: {
      py: 2,
      textAlign: "left",
      borderBottom: t => `4px solid ${t.colors.muted}`,
    },
    td: {
      py: 2,
      textAlign: "left",
      borderBottom: t => `1px solid ${t.colors.muted}`,
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: "bold",
    },
    field: {
      borderColor: "lightgray",
      ":focus": {
        borderColor: "primary",
        outline: "none",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
      },
    },
    input: {
      variant: "forms.field",
    },
    select: {
      variant: "forms.field",
    },
    textarea: {
      variant: "forms.field",
    },
    radio: {},
    slider: {
      bg: "lightgray",
    },
    switch: {
      // thumb: {}
    },
  },
}
