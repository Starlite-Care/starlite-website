import Footer from "@/components/UI/Footer";

export const metadata = {
  title: "Starlite Contact Us Page",
  description: "contact us via the following mediums or schedule a call",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`max-h-[100vh]`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
