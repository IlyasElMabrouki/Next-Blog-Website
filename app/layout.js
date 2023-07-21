import Navbar from './components/Navbar'
import ProfilPic from "./components/ProfilPic";
import './globals.css'

export const metadata = {
  title: "Ilyas's Blog",
  description: 'Created by Ilyas El Mabrouki',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <ProfilPic></ProfilPic>
        {children}
      </body>
    </html>
  )
}
