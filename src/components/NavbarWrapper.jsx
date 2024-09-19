'use client';

import { usePathname } from 'next/navigation';
import Navbar from "@/components/Navbar";

export default function NavbarWrapper({ children }) {
  const pathname = usePathname();
  const isLandingPage = pathname === '/';

  return (
    <>
      {!isLandingPage && <Navbar />}
      {children}
    </>
  );
}