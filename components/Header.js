import dynamic from "next/dynamic"
import Dashboard from "@/pages/dashboard";

const Header=() => {
   return (
   <div class="hidden lg:flex lg:gap-x-12">
    <a href="./" class="text-sm font-semibold leading-6 text-gray-900">Home</a>
    <a href="./dataset" class="text-sm font-semibold leading-6 text-gray-900">Dataset Marketplace</a>
    <a href="./dashboard" class="text-sm font-semibold leading-6 text-gray-900">Dashboard</a>
  </div>
   );
};

export default dynamic(() => Promise.resolve(Header), { ssr: false });