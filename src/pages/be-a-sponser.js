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

function BeASponser() {
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
          .collection("sponsers")
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
          <Heading>قم بدعمنا وكن سبب في نجاة شعب</Heading>
          <p>
            إذا كنت ترى في هذا المشروع أمل في حماية ارواح العديد من الابرياء هنا
            وتود ان تدعمنا في هذا المشروع ومساعدة الابرياء في اليمن قم بسماعدتنا
            عبر التواصل معنا او تعبئية النموذج وسيتم التواصل معك
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
              <Flex sx={{ flexWrap: "wrap" }}>
                <div sx={{ marginInlineEnd: 30 }}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    required
                    name="name"
                    label="إسم المؤسسة او الشخص"
                  />
                </div>
                <div sx={{ marginInlineEnd: 30 }}>
                  <Input
                    name="workType"
                    label="طبيعة العمل"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.nickname}
                  />
                </div>
                <div sx={{ marginInlineEnd: 30 }}>
                  <Input
                    name="website"
                    label="الموقع الالكتروني"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.website}
                  />
                </div>
                <div sx={{ marginInlineEnd: 30 }}>
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
                <div sx={{ marginInlineEnd: 30 }}>
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
                <Governorate />
                <div sx={{ marginInlineEnd: 30 }}>
                  <Input
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    required
                    name="city"
                    label="مكان الاقامة"
                  />
                </div>
                <div sx={{ marginInlineEnd: 30 }}>
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
              <Flex sx={{ justifyContent: "flex-end", paddingInlineEnd: 30 }}>
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

export default BeASponser
