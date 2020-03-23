/** @jsx jsx */
import { Heading, jsx } from "theme-ui"

export default function Intro() {
  return (
    <section>
      <header sx={{ my: 4 }}>
        <Heading>نبذة عن التطبيق</Heading>
      </header>
      <main sx={{ mb: 5 }}>
        <p>
          تطبيق خليك بالبيت عبارة عن تطبيق خدمي غير ربحي. يقوم بتجميع المتطوعين
          من انحاء اليمن للقيام بمهام توصيل الادوية والاحتياجات الاساسية للبيوت
          بغرض التقليل من النزولات والمساهمة في انجاح الحجر الصحي في المنزل وعدم
          انتشار وباء كورونا المستجد.
          <strong> نسأل الله لنا ولكم العفو والعافية</strong>
        </p>
      </main>
    </section>
  )
}
