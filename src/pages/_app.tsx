import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import firebase from "./firebase";
import "firebase/compat/auth";


const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
};

console.log(firebase.apps.length);
console.log(firebase.auth().currentUser);


export default MyApp;
