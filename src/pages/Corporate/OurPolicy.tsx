import { Fragment } from "react";
import htmlParser from "html-react-parser";
// Components
import Header from "../../components/Header";
import SEO from "../../components/SEO";
// Containers
import MissionVisionGoals from "../../containers/MissionVisionGoals";
// Data
import missionVisionGoalsData from "../../data/missionVisionGoals";

export default function Home() {
  let missionVisionGoals = missionVisionGoalsData;

  const policys = [
    {
      title: "KALİTE POLİTİKAMIZ",
      content:
        "<p>Stamplast  Plastik Sanayi Hizmetleri olarak; sürekli ve kalıcı başarının yönetim sistemlerinin uygulanması, sürdürülmesi ve sürekli iyileştirilmesi ile sağlanacağına inanıyoruz.</p><br/><b>Bu nedenle STAMPLAST olarak;</b><br/><br/><ul><li><b>1- </b>Sürekli İyileştirme çalışma felsefemizdir.</li><li><b>2- </b>Tüm Ürünlerimizde sıfır hata en büyük hedefimizdir.</li><li><b>3- </b>İş ortaklarımıza Yüksek kalite ve en uygun fiyatla mal temin edebilmek için, üretim, satın alma ve diğer süreçlerimizi daima dinamik tutarız.</li><li><b>4- </b>Sevkiyat performansı hedefimiz müşterilerimizin beklentisi ile %100 uyumdur.</li><li><b>5- </b>Firmamızın üst yönetiminden aldığımız yıllık ve uzun vadeli hedefleri gerçekleştirmek için var gücümüzle çalışırız.</li><li><b>6- </b>Bütün bunları gerçekleştirirken;</li></ul><br/><p>Yönetimimiz, yukarıda yazılan politikaların eksiksiz olarak uygulanması için gerekli olan tüm destek ve çabayı göstereceğini tüm müşterilerine taahhüt eder.</p><br/><br/><br/><strong>Genel Müdür</strong>",
    },
  ];

  return (
    <Fragment>
      <SEO title="Politikamız" />
      <main>
        <Header.Breadcrumb
          breadcrumbs={[{ name: "Kurumsal", to: "/corporate" }]}
          head="Politikamız"
        />

        <section className="relative section py-16" data-aos="fade-up">
          <MissionVisionGoals data={missionVisionGoals} />
        </section>

        <section className="relative section pb-16" data-aos="fade-up">
          <div className="container border-t border-gray-100 relative z-10 mx-auto flex flex-wrap pt-8">
            {policys &&
              policys.map((item, key: number) => (
                <div
                  key={key}
                  className="w-full p-5"
                  data-aos="fade-up"
                >
                  <div className="bg-white shadow rounded px-8 py-6">
                    <h5 className="bg-primary-50 rounded py-2 uppercase text-lg font-semibold text-center text-primary">
                      {item.title}
                    </h5>
                    <p className="text-gray-500 mt-4">
                      {htmlParser(item.content)}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>
    </Fragment>
  );
}
