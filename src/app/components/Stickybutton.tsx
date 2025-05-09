"use client"; // For Next.js App Router (if using the app directory)
import { useRouter } from "next/navigation";

export default function StickyApplyButton() {
  const router = useRouter();

  const handleApplyClick = () => {
    router.push("/Formapply"); // Change "/apply" to your desired route
  };

  return (
    <div className=" font-serif fixed  bottom-20 md:bottom-20 lg:bottom-24 z-50">
      <button
        onClick={handleApplyClick}
        className="bg-green-300 text-black px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-white"
      >
        Apply now
      </button>
    </div>
  );
}
