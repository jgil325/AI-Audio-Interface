import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
//import firebase from "./firebase";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

//console.log(firebase.apps.length);

export default MyApp;
