import { type AppType } from "next/app";

import { trpcRouter } from "../utils/trpcRouter";

import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default trpcRouter.withTRPC(MyApp);
