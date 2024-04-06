import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/lib/theme";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DefaultHeadSEO from "@/components/SEO";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({ once: true, anchorPlacement: "bottom-bottom" });
    AOS.refresh();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <DefaultHeadSEO />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
