import { Fragment } from "react";
import htmlParser from "html-react-parser";
import * as configs from "../../configs";
// Components
import Header from "../../components/Header";
import SEO from "../../components/SEO";

export default function Home() {
  const about = {
    image:
      "https://static.wixstatic.com/media/05e093_5dcb3071d1e14fa199b951ef947a707c~mv2.jpg/v1/fill/w_623,h_980,al_c,q_85,usm_0.66_1.00_0.01/05e093_5dcb3071d1e14fa199b951ef947a707c~mv2.webp",
    head: "Hem Küresel Hem Küçük Ölçekli Bir Tedarikçi",
    content:
      "<p>Eylül 2020  tarihinde plastik parça üretmek üzere Bursa Kayapa Organize sanayinde  kurulan şirketimiz Stamplast Plastik Üretim Teknolojileri, başta otomotiv olmak üzere tüm iş kollarında iş ortaklarına hizmet vermeyi hedeflemektedir. Önümüzdeki yıllarda teknoloji, üretim, kalite, dizayn ve pazarlama konularında yatırımlarına hız kazandıracaktır.</p><br/><p>Plastik parça üretim sektörünün genç ve dinamik firmalarındandır. Kurucuların Plastik Parça üretim sektöründeki tecrübeleri, teknik eğitimleri ve birikimleri sayesinde müşterilerine kaliteli hizmet, satış öncesi ve satış sonrası teknik destek sağlamaktadır.</p><br/><p>Kaliteli üretim anlayışı ile, gelişmesine devam eden Stamplast, tasarımdan üretime kadar olan tüm aşamalarda yalın üretim sistemleri, proje yönetimi gibi müşteri memnuniyet odaklı bir vizyona sahiptir.</p><br/><p>Gelecek yıllarda sektörün en güçlü ve prestijli firmalardan biri olmayı hedefleyen Stamplast, iş ortaklarına en  iyi hizmeti vermeyi hedeflemektedir.</p>",
  };

  return (
    <Fragment>
      <SEO title="Politikamız" />
      <main>
        <Header.Breadcrumb
          breadcrumbs={[{ name: "Kurumsal", to: "/corporate" }]}
          head="Hakkımızda"
        />

        <section
          className="relative section overflow-hidden"
          data-aos="fade-up"
        >
          <div className="container relative z-10 mx-auto flex flex-wrap lg:flex-row flex-col-reverse">
            <div className="lg:w-1/2 w-full py-16 md:px-5">
              <h4 className="text-2xl font-semibold mb-8">
                {about.head},
                <span className="ml-2 text-primary">{configs.NAME}</span>
              </h4>
              <div>{htmlParser(about.content)}</div>
            </div>
            <div className="lg:w-1/2 w-full lg:pt-16 pb-16 md:px-5">
              <img
                src={about.image}
                className="w-full object-contain rounded shadow"
              />
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
}
