import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";

import Fab from "../components/FAB";

const actions = [
  { label: "About", icon: <FcAbout />, onClick: console.log },
  { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
  { label: "Picture", icon: <FcCamera />, onClick: console.log },
  { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
];

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      {/* <Navbar /> */}
      <Fab actions={actions} />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
