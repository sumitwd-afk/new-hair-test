"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function RouteGuard({ children }) {
  const pathname = usePathname();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    // Check path authorization on client-side
    const publicPaths = ["/", "/plan"];
    
    // Check if the current route is public
    const isPublicPath = publicPaths.includes(pathname);
    
    if (!isPublicPath) {
      const planDetails = window.sessionStorage.getItem("urootsPlanDetails");
      if (!planDetails) {
        // Redirect to Step 1 if details are missing
        window.location.replace("/plan");
        return;
      }
    }
    
    setAuthorized(true);
  }, [pathname]);

  if (!authorized) {
    // Show a clean loader while verifying state to avoid flickering
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#fcfcf9" }}>
        <div style={{ fontSize: "1.8rem", color: "#666", fontFamily: "sans-serif" }}>Verifying session...</div>
      </div>
    );
  }

  return children;
}
