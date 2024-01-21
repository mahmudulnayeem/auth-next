import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
}
const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col  items-center justify-center text-center">
      <Image
        src="/logo.png"
        width={250}
        height={250}
        alt="ApexMed Innovations"
      />
      <div className="gap-y-4">
        <h1 className={cn("text-3xl font-semibold ", font.className)}>
          <span className="text-brand">ApexMed</span> Innovations
        </h1>
        <p className="text-muted-foreground text-sm ">{label}</p>
      </div>
    </div>
  );
};

export default Header;
