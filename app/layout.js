import "./css/globals.css";
import "./css/styles.min.css"
import "./css/animate.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {ModalProvider} from "../components/Modal/ModalProvider";
import FormModal from "../components/Modal/FormModal";
import AuthProvider from "@/providers/AuthProvider";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
    <div id="__next">
        <AuthProvider>
        <ModalProvider>
            <FormModal />
            <Header/>
            {children}
            <Footer/>
        </ModalProvider>
        </AuthProvider>
    </div>
    </body>
    </html>
);
}
