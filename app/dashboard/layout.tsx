import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Manage Gyms, Trainers, Clients and more.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-gray-100">
      <body className="h-full">{children}</body>
    </html>
  );
}
