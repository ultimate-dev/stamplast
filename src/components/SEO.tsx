// Configs
import * as configs from "../configs";
import { Helmet } from "react-helmet";

class SEO {
  title?: string;
  description?: string;
  keywords?: string;
}
export default ({ title = "", description = "", keywords = "" }) => {
  return (
    <Helmet>
      <title>
        {title} - {configs.NAME}{" "}
      </title>
      <link rel="canonical" href={configs.BASE_URL} />
    </Helmet>
  );
};
