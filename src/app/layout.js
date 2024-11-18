
import "./globals.css";

export const metadata = {
  title: "Simple Todo-App",
  description: "Created By haider  hussain",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=""
      >
        {children}
      </body>
    </html>
  );
}
