import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Bridge Credit home">
      <span className="flex h-20 w-20 items-center justify-center rounded-lg  text-white">
      <Image src={"/logo.png"} alt="logo" width={100} height={100}/>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display font-bold text-[17px] tracking-tight text-navy">Bridge Credit</span>
      </span>
    </Link>
  );
}
