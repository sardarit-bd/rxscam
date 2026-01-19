import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";

const LogoSection = () => {
    return (
        <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                    <Image src={logo} alt="Logo" width={100} height={100} className="w-[170px] h-auto" />
                </div>
            </Link>
        </div>
    )
}

export default LogoSection;