import Image from "next/image";
import ProductImageConent from "../../../public/productImageContent.png";

const ProductImage = () => {
    return (
        <div className='border rounded-t-2xl h-[180px] bg-[#EEF4FF] flex items-center justify-center'>
            <Image src={ProductImageConent} alt="ProductImageConent" width={100} height={100} className="w-auto h-auto" />
        </div>
    )
}

export default ProductImage;