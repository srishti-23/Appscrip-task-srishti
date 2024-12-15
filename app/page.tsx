import Footer from "./components/Footer";
import Header from "./components/Header";
import Page from "./pages/Page"
import Products from "./pages/Products";
import Head from "next/head";
export default function Home() {
  return (
    <>
       <Head>
        <title>Home | appScrip</title>
        <meta
          name="description"
          content="Discover our products and shop the best deals."
        />
         </Head>
      <Header />
      <Page/>
      <Products/>
      <Footer />


    </>
  );
}
