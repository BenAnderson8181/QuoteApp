import { type AppType } from "next/app";

import { api } from "quote-app/utils/api";

import "quote-app/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default api.withTRPC(MyApp);
