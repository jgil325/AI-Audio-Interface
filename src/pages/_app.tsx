import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";
import { IoMdHome, IoMdCloudUpload, IoIosContact } from "react-icons/io";
import Fab from "../components/FAB";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  const handleHomeClick = () => {
    router.push("/");
  };
  const handleUploadClick = () => {
    router.push("/Upload");
  };
  const handleAboutClick = () => {
    router.push("/About");
  };

  const actions = [
    { label: "Home", icon: <IoMdHome />, onClick: handleHomeClick },
    { label: "Upload", icon: <IoMdCloudUpload />, onClick: handleUploadClick },
    { label: "About", icon: <IoIosContact />, onClick: handleAboutClick },
  ];
  return (
    <div>
      {/* <Navbar /> */}
      <Fab actions={actions} />
      <Component {...pageProps} />
    </div>
  );
};

export default MyApp;
