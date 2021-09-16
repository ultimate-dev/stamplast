import { Fragment } from "react";
import { useParams } from "react-router";
import htmlParser from "html-react-parser";
// Components
import Header from "../components/Header";
import SEO from "../components/SEO";
import BackBox from "../components/BackBox";
// Data
import productsData from "../data/products";

export default function Home() {
  let { slug }: any = useParams();

  let product_id = Number(String(slug).split("-").slice(-1)[0]);

  let product = productsData.find((item) => item.id == product_id);

  if (product)
    return (
      <Fragment>
        <SEO title={product?.name} />
        <main>
          <Header.Breadcrumb
            breadcrumbs={[{ name: "Ürünler", to: "/products" }]}
            head={product.name}
          />

          <section
            className="relative section overflow-hidden"
            data-aos="fade-up"
          >
            <BackBox align="right" color="gray-50" size={80} />
            <div className="container relative z-10 mx-auto flex flex-wrap">
              <div className="lg:w-1/2 w-full py-16 md:px-5">
                <img
                  src={product.image}
                  className="w-full object-contain rounded shadow"
                  data-aos="fade-up"
                />
                <div
                  className="w-full text-center text-gray-500 mt-5"
                  data-aos="fade-up"
                >
                  {product.desc}
                </div>
              </div>
              <div className="lg:w-1/2 w-full lg:pt-16 pb-16 md:px-5">
                <h4 className="text-2xl font-semibold mb-8" data-aos="fade-up">
                  {product.name}
                </h4>
                <div data-aos="fade-up">{htmlParser(product.content)}</div>
              </div>
            </div>
          </section>
        </main>
      </Fragment>
    );
  else return null;
}
