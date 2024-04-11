import Navbar from "@/components/Navbar";
import Tabbar from "@/components/Tabbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
    <Navbar />
    <Component {...pageProps} />;
    <Tabbar />
    </>
}
