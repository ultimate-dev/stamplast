import ContactSvg from "../assets/svgs/contact.svg";
import { RiSendPlane2Fill } from "react-icons/ri";

class ContactProps {}
export default ({}: ContactProps) => {
  const input_props = {
    className:
      "bg-gray-100 outline-none py-2 px-5 rounded-md w-full bg-opacity-75 border border-gray-100 focus:border-gray-200 focus:bg-gray-100 hover:bg-opacity-100",
  };
  return (
    <section className="relative section py-16 overflow-hidden">
      <div className="absolute z-0 right-0 top-1/2 -mt-40 bg-primary-50 w-80 h-80 rounded-3xl transform rotate-45 translate-x-1/2" />

      <div className="relative z-10 container mx-auto py-10">
        <div className="flex items-center mb-5" data-aos="fade-up">
          <h5 className="text-2xl font-semibold mr-5">İletişim</h5>
          <div className="h-1 w-16 rounded-xl bg-primary" />
        </div>
        <div className="flex items-center justify-center flex-wrap">
          <div
            className="lg:w-1/2 flex flex-wrap md:my-10 mt-5 mb-10"
            data-aos="fade-up"
          >
            <img
              src={ContactSvg}
              className="object-contain w-full md:px-10 px-5"
            />
          </div>
          <div
            className="lg:w-1/2 flex flex-wrap shadow bg-white rounded md:p-8 p-5"
            data-aos="fade-up"
          >
            <div className="md:w-1/2 w-full p-2">
              <label className="block text-gray-500 text-sm mb-1 px-2">
                Ad Soyad
              </label>
              <input {...input_props} />
            </div>
            <div className="md:w-1/2 w-full p-2">
              <label className="block text-gray-500 text-sm mb-1 px-2">
                E-Posta
              </label>
              <input {...input_props} />
            </div>
            <div className="w-full p-2">
              <label className="block text-gray-500 text-sm mb-1 px-2">
                Konu
              </label>
              <input {...input_props} />
            </div>
            <div className="w-full p-2">
              <label className="block text-gray-500 text-sm mb-1 px-2">
                Mesaj
              </label>
              <textarea {...input_props} rows={3} />
            </div>
            <div className="w-full p-2 flex justify-end">
              <button className="bg-primary rounded text-white px-10 py-3 opacity-100 flex items-center bg-opacity-75 hover:bg-opacity-100">
                <span className="text-sm font-medium">Gönder</span>
                <RiSendPlane2Fill className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
