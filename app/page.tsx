import FilterCategoryImage from "./Components/filterCategoryImage/index";

 export default function single_listing(){
    const backgroundColor = "white";
    return(
        <div className="w-full flex flex-col bg-white">
            <div className="text-white font-semibold tex-md items-center justify-start bg-gray-400 p-4">
              Free shipping on All Orders!
            </div>   
            <div className="text-red-900 bg-gray-200 font-semibold text-small p-2 ">
              Men's Carrot Hoodies and Sweatshirts Carrot Crewneck 
            </div> 
            <div className="flex flex-row gap-4 mt-10 ml-8">
                <div className="flex flex-col gap-y-8">
                  <div className="flex flex-row gap-x-10">
                    <img src="/front_img.png" alt="First Picture" width={375} height={200} />
                    <img src="/back_img.png" alt="Second Picture" width={375} height={200} />
                  </div>
                  <div className="flex flex-row gap-x-10">
                    <img src="/face_img.png" alt="Third Picture" width={375} height={200} />
                    <img src="/sweater_img.png" alt="Fourth Picture" width={375} height={200} />
                  </div>
              </div>
              <div className="flex flex-col gap-y-10 ml-20">
                <button className="bg-red-900 text-white font-bold py-3 px-6 rounded-full text-xl w-fit">
                  New!
                </button>
                <div className="flex flex-col gap-y-4">
                  <div className="text-black text-3xl">
                    The H Sweater
                  </div>
                  <div className="text-black font-bold text-3xl">
                    $24.99
                  </div>
                </div>
                <div className="flex flex-row gap-x-4 text-black text-lg items-center">
                  <div>
                    Size S
                  </div>
                  <div className="text-4xl leading-none">
                    •
                  </div>
                  <div>
                    Excellent Condition
                  </div>
                  <div className="text-4xl leading-none">
                    •
                  </div>
                  <div>
                    The Harvard Shop
                  </div>
                </div>
                <button className="bg-red-900 hover:bg-red-500 text-white font-bold py-4 px-4 text-2xl">
                  Buy Now
                </button>
                <div className="flex flex-row gap-x-4">
                  <button className="border border-red-800 border-4 hover:bg-gray-400 text-red-800 font-bold py-2 px-4 w-64">
                    DM Seller
                  </button>
                  <button className="border border-red-800 border-4 hover:bg-gray-400 text-red-800 font-bold py-2 px-4 w-64">
                    Add to Cart
                  </button>
                </div>
                <div className="w-128 text-black text-lg">
                  <p>Discover the pinnacle of sophistication and style with The Harvard Shop's latest addition: The H Sweater! Drawing inspiration from iconic varsity knits, this garment seamlessly blends timeless elegance with unmatched comfort. Experience a touch of Harvard's excellence in every stitch. </p>
                </div>
                <ul className="list-disc text-black text-lg ml-5 w-128">
                  <li>Unisex Design</li>
                  <li>Officially licensed Harvard University apparel</li>
                  <li>Every order is meticulously crafted, expertly packaged, and sent your way by dedicated Harvard University students.</li>
                </ul>
              </div>
            </div>
            <div>
              <FilterCategoryImage label="T-Shirts" imageSrc="/t-shirt-filter.png"/>
            </div>
            <div className="flex flex-col gap-y-4 mt-10 ml-8">
            </div>
        </div>
    )}