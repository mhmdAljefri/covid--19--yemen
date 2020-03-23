/** @jsx jsx */
import { jsx, Input as ThemedInput, Button } from "theme-ui"
import firebase from "gatsby-plugin-firebase"
import { Formik, Form, Field } from "formik"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import { Heading, Flex } from "theme-ui"
import Input from "../components/Input"
import Governorate from "../components/Governorate"
import { useEffect } from "react"
import Recaptcha from "react-recaptcha"

function BeAVolunteer() {
  const handleAddVolunteer = async user => {
    console.log({ user })
    const volunteer = await firebase
      .firestore()
      .collection("users")
      .add({ ...user })
    console.log({ volunteer })
  }
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://www.google.com/recaptcha/api.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)
  })
  return (
    <Layout>
      <SEO title="كن متطوع" />
      <section>
        <header>
          <Heading>تسجيل كمتطوع</Heading>
          <p>
            لكل من يرغب في التطوع حسب اهتمامة ومهارته. لكي تكونه له بصمة خير
            للمجتمع. يرجى تعبئة البيانات
          </p>
        </header>
      </section>
      <main>
        <Formik onSubmit={handleAddVolunteer} initialValues={{ email: "" }}>
          {({
            handleBlur,
            handleChange,
            values,
            errors,
            touched,
            setFieldValue,
            isSubmitting,
          }) => (
            <Form
              sx={{
                maxWidth: 650,
                my: 4,
                mx: 4,
                pt: 5,
                pb: 3,
                px: 3,
                boxShadow: "1px 1px 15px #eee",
              }}
            >
              <Flex sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
                <div sx={{ marginInlineEnd: 10 }}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    name="name"
                    label="الاسم الرباعي"
                  />
                </div>
                <div sx={{ marginInlineEnd: 10 }}>
                  <Input
                    name="email"
                    type="email"
                    required
                    label="البريد الالكتروني"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                </div>
                <div sx={{ marginInlineEnd: 10 }}>
                  <label>الجنس</label>
                  <Flex>
                    <Flex sx={{ alignItems: "center", marginInlineEnd: 10 }}>
                      <ThemedInput
                        sx={{ marginInlineEnd: 10 }}
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                      />
                      <label htmlFor="male">ذكر</label>
                    </Flex>
                    <Flex sx={{ alignItems: "center" }}>
                      <ThemedInput
                        sx={{ marginInlineEnd: 10 }}
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                      />
                      <label htmlFor="female">أنثى</label>
                    </Flex>
                  </Flex>
                </div>
              </Flex>
              <Flex
                sx={{
                  justifyContent: "space-between",
                  mt: 4,
                  mb: 3,
                  flexWrap: "wrap",
                }}
              >
                <Governorate />
                <div sx={{ marginInlineEnd: 10 }}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    name="city"
                    label="مكان الاقامة"
                  />
                </div>
                <div sx={{ marginInlineEnd: 10 }}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    name="mobile"
                    label="رقم الجوال"
                  />
                </div>
              </Flex>
              <Recaptcha
                sitekey={process.env.GATSBY_RECAPTCH_PUBLIC_KEY}
                render="explicit"
                theme="dark"
                verifyCallback={response => {
                  setFieldValue("recaptcha", response)
                }}
                onloadCallback={() => {
                  console.log("done loading!")
                }}
              />
              <Flex sx={{ justifyContent: "flex-end", paddingInlineEnd: 10 }}>
                <Button disabled={isSubmitting} type="submit">
                  ارسال{isSubmitting && "..."}
                </Button>
              </Flex>
              <div
                class="g-recaptcha"
                sitekey={process.env.GATSBY_RECAPTCH_PUBLIC_KEY}
              ></div>
              {errors.recaptcha && touched.recaptcha && (
                <p>{errors.recaptcha}</p>
              )}
            </Form>
          )}
        </Formik>
      </main>
    </Layout>
  )
}

export default BeAVolunteer
