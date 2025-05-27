import HeaderMenu from "@/components/HeaderMenu/headerMenu";
import "./globals.css";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderMenu />
        {children}
      </body>
    </html>
  );
}
