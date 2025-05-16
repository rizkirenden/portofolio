// components/Template.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Loading } from "../atoms/loading";

export default function Template({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {loading && <Loading />}
      {children}
    </>
  );
}
