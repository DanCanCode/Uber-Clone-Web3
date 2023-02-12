import Navbar from "../components/Navbar";
import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
