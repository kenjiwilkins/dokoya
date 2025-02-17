import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { GoogleMap } from "@/components/GoogleMap";
import { getServerSession } from "next-auth";
import { ServiceWorkerProvider } from "@/components/ServiceWorkerProvider";

export const metadata: Metadata = {
  title: "Dokoya - map",
  description: "Dokoya map page",
};
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";

const MapPage = async () => {
  const session = await getServerSession();
  if (!session) {
    // Redirect to root if no session
    redirect("/?error=SESSION_EXPIRED");
  }
  const user = session?.user;
  return (
    <ServiceWorkerProvider>
      <GoogleMap
        apiKey={apiKey}
        username={user?.name ?? ""}
        imageUrl={user?.image ?? ""}
      />
    </ServiceWorkerProvider>
  );
};

export default MapPage;
