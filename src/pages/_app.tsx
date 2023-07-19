import "@/styles/globals.css";

import type { AppProps } from "next/app";
import LocalizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";

dayjs.extend(LocalizedFormat);

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
