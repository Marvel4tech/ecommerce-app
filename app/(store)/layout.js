
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider dynamic>
      <html lang="en">
        <body className= "antialiased">
          <main>
            <Header />
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
