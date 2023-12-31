import { useContext } from "react";
import Product from "@/contexts/ImageMap";
import Link from "next/link";
import Image from "next/image";
import {ProductContext} from "@/contexts/ProductContext.js";

export const ImgComponent = () => {

  const {products, productData, setProductData, setCompareList, compareList} = useContext(ProductContext);
    // const value = useContext(Product);
    // const Imgs = value?.state.Imgs;
  
    const handleData = (data) => {
      setProductData(data);
      // console.log(data);
    };

    

  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {products.map((e, idx: number) => (
        <div key={idx}>
          <Link href="/pdp">
            <Image src={e.image.url} alt="img1" width={288} height={288} className="w-72 h-72 p-1" onClick={() => handleData(e)}/>
              <div className="text-black text-sm">{e.name}</div>
              <div className="text-orange-600 text-sm">${e.price}</div>
          </Link>
          
        </div>
      ))}
    </div>
  );
};
