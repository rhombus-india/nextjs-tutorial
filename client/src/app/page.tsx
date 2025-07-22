import { CustomButton } from "./components/Button";
import Link from 'next/link'
import Image from 'next/image'
export default function Home() {
  return (
   <div className="flex flex-col gap-4">
      <CustomButton>Its a button </CustomButton>

      {/* Links */}
      <a href="/built_in_components">Buil In Components</a>
      <Link href={"/built_in_components"}>Built In Components</Link>
      <div className="w-24 h-24 relative">
        <Image  src={'/next.svg'} alt="alternative" layout="fill" />
      </div>
   </div>
  );
}
