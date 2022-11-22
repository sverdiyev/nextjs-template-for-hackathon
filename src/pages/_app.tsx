import { type AppType } from "next/app";

import { trpcUtils } from "../utils/trpcUtils";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpcUtils.withTRPC(MyApp);
