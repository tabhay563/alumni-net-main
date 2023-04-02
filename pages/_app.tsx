import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Navigation from "../components/reusables/Navigation";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  {
    return Component.PageLayout ? (
      <Component.PageLayout>
        <Component {...pageProps} />
      </Component.PageLayout>
    ) : (
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
