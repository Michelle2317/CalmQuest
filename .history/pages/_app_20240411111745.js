import "@/styles/globals.css";
import Navbar from '@/components/Navbar'
import Tabbar from '@/components/Tabbar'

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
  <Navbar />
  <Component {...pageProps} />
  <Tabbar />
}
