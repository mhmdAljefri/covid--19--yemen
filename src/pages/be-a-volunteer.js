/** @jsx jsx */
import { jsx, Input as ThemedInput, Button } from "theme-ui"
import { Heading, Flex } from "theme-ui"
import { Formik, Form } from "formik"
import { toast } from "react-toastify"

import firebase from "gatsby-plugin-firebase"
import * as Yup from "yup"
import Layout from "../layouts/default"
import SEO from "../components/seo"
import Input from "../components/Input"
import Governorate from "../components/Governorate"

function BeAVolunteer() {
  const handleAddVolunteer = async ({
    email,
    password,
    passwordConfirmation,
    ...user
  }) => {
    return firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        return firebase
          .firestore()
          .collection("users")
          .add({ uid: res.user.uid, ...user })
      })
      .then(() => toast.success("تم اضافة حسابك كمتطوع"))
      .catch(({ message }) => toast.error("حدث خطاء في التسجيل: " + message))
  }

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
        <Formik
          validationSchema={Yup.object().shape({
            password: Yup.string().required("حقل كلمة المرور مطلوب"),
            passwordConfirmation: Yup.string().oneOf(
              [Yup.ref("password"), null],
              "حقل كلمة تاكيد كلمة المرور يجب ان يطابق كلمة المرور"
            ),
          })}
          onSubmit={handleAddVolunteer}
          initialValues={{ email: "" }}
        >
          {({
            handleBlur,
            handleChange,
            values,
            isSubmitting,
            errors,
            touched,
          }) => (
            <Form
              sx={{
                maxWidth: 700,
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
                    required
                    name="name"
                    label="الاسم الرباعي"
                  />
                </div>
                <div sx={{ marginInlineEnd: 10 }}>
                  <Input
                    name="nickname"
                    type="nickname"
                    required
                    label="اللقب"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nickname}
                  />
                </div>
                <div sx={{ marginInlineEnd: 10 }}>
                  <label htmlFor="gender">الجنس</label>
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
                        checked
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
                        checked={"female" === values.gender}
                        onChange={handleChange}
                        onBlur={handleBlur}
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
                  {errors.email && touched.email && (
                    <span sx={{ color: "error" }}>{errors.email}</span>
                  )}
                </div>
                <div sx={{ marginInlineEnd: 10 }}>
                  <Input
                    name="password"
                    type="password"
                    required
                    label="كلمة المرور"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  {errors.email && touched.email && (
                    <span sx={{ color: "error" }}>{errors.email}</span>
                  )}
                </div>
                <div sx={{ marginInlineEnd: 10 }}>
                  <Input
                    name="passwordConfirmation"
                    type="password"
                    required
                    label="كلمة المرور"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirmation}
                  />
                  {errors.passwordConfirmation &&
                    touched.passwordConfirmation && (
                      <span sx={{ color: "error" }}>
                        {errors.passwordConfirmation}
                      </span>
                    )}
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
                    required
                    name="city"
                    label="مكان الاقامة"
                  />
                </div>
                <div sx={{ marginInlineEnd: 10 }}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.mobile}
                    required
                    name="mobile"
                    type="number"
                    label="رقم الجوال"
                  />
                </div>
              </Flex>
              <Flex sx={{ justifyContent: "flex-end", paddingInlineEnd: 10 }}>
                <Button disabled={isSubmitting} type="submit">
                  ارسال{isSubmitting && "..."}
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      </main>
    </Layout>
  )
}

export default BeAVolunteer
