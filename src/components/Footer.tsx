import { FaMapPin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full mt-16 py-6 bg-blue-950/80 text-center text-sm text-blue-100 backdrop-blur-md">
      <div className="max-w-3xl mx-auto px-4 flex flex-col gap-1">
        <div>&copy; {new Date().getFullYear()} Tyler Ingram | DynamicShark. All rights reserved.</div>
        <div className="flex justify-center items-center" itemScope itemType="https://schema.org/Place">
          <FaMapPin className="mr-2" aria-label="Location" />
          <span itemProp="address">Comox Valley, Vancouver Island, BC, Canada</span>
        </div>
      </div>
    </footer>
  );
}
