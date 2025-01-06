
// import Navbar from './components/Navbar';
import './globals.css'; // Import global styles

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {/* <Navbar /> */}
        <main>{children}</main>
      </body>
    </html>
  );
}
