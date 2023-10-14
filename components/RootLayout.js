import Header from "./Header"
import dynamic from "next/dynamic"
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({ children }) => {
    return(
        <main
        className={`flex min-h-screen flex-col justify-between p-24 ${inter.className}`}
      >
        <Header />
        {children}
      </main>
    );
};

export default dynamic(() => Promise.resolve(RootLayout), { ssr: false });