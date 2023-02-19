import "./globals.css";
import { Noto_Sans } from "@next/font/google";
const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body
        className="bg-[#0B0B22] text-white bg-three-circle bg-no-repeat"
        style={notoSans.style}
      >
        {children}
      </body>
    </html>
  );
}
