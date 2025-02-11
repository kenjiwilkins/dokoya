import type { Metadata } from "next";
import { LocationInfo } from "@/components/LocationInfo";
import { GoogleMap } from "@/components/GoogleMap";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Dokoya - map",
  description: "Dokoya map page",
}
const apiKey = process.env.GOOGLE_MAPS_API_KEY ?? "";


const MapPage = async () => {
  const session = await getServerSession();
  const user = session?.user;
  return (
    <div>
        <GoogleMap apiKey={apiKey}
          username={user?.name ?? ""}
          imageUrl={user?.image ?? ""}
        />
    </div>
  )
}

export default MapPage;