import FAQ from "./FAQ";
import SupportSection from "./SupportSection";
import HomeExperts from "./HomeExperts";
import { useState, useEffect } from "react";


export default function Home() {

const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [therapists, setTherapists] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchExperts = async () => {
      try {
        const res = await fetch(`${API_URL}/api/experts`);  // match backend endpoint
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        // Ensure data is an array
        if (!Array.isArray(data)) throw new Error("Invalid response format");
        
        const formatted = data.map((e: any) => ({
          name: e.name,
          title: e.title,
          nextVisit: e.next_available
            ? new Date(e.next_available).toLocaleString("en-IN")
            : "Not available",

             avatar: e.avatar
            ? `${API_URL}/uploads/${e.avatar}`
            : `https://ui-avatars.com/api/?name=${encodeURIComponent(e.name)}&background=0ea5e9&color=fff&bold=true`
        }));
        setTherapists(formatted);
      } catch (err) {
        console.error("Error fetching experts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchExperts();
  }, [API_URL]);


  
  return (
    <>

      <div className="h-[500px] flex items-center justify-center">
        <SupportSection />

      </div>
      <HomeExperts />
       <FAQ />


    </>
  );
}


