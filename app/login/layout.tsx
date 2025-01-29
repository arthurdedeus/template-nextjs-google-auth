import type React from "react";

interface LoginLayoutProps {
  children: React.ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <html>
      <body>
        <div className="h-screen">{children}</div>
      </body>
    </html>
  );
}
