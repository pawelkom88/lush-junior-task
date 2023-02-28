import Image from "next/image";
import GorgeousLionel from "../public/images/404.webp";

export default function DefaultPage() {
  return (
    <div className="lionel">
      <Image src={GorgeousLionel} width={800} height={600} alt="Gorgeous Lionel" />
    </div>
  );
}
