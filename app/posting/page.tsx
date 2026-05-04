export default function posting() {
    return(
        <div className="flex flex-col">
            <div className="text-red-900 font-bold text-4xl mt-20 flex flex-col ml-100">
                <div>
                    Posting Page
                </div>
                <div className="text-lg text-black mt-4 font-normal">
                    Add up to 8 photos in JPEG or PNG format. 
                </div>
                <div className="flex flex-col gap-y-8 mt-4">
                    <div className="flex flex-row gap-x-8">
                        <button className="bg-white hover:bg-gray-200 text-black font-regular h-48 w-48 text-lg border-dashed border-black border-2">
                            Add a Photo
                        </button>
                        <button className="bg-white text-black font-regular h-48 w-48 text-lg border-dashed border-black border-2">
                            Cover Photo
                        </button>
                        <button className="bg-white text-black font-regular h-48 w-48 text-lg border-dashed border-black border-2">
                            Front
                        </button>
                        <button className="bg-white text-black font-regular h-48 w-48 text-lg border-dashed border-black border-2">
                            Back
                        </button>
                    </div>
                    <div className="flex flex-row gap-x-8">
                        <button className="bg-white text-black font-regular h-48 w-48 text-lg border-dashed border-black border-2">
                            Side
                        </button>
                        <button className="bg-white text-black font-regular h-48 w-48 text-lg border-dashed border-black border-2">
                            Label
                        </button>
                        <button className="bg-white text-black font-regular h-48 w-48 text-lg border-dashed border-black border-2">
                            Detail
                        </button>
                        <button className="bg-white text-black font-regular h-48 w-48 text-lg border-dashed border-black border-2">
                            Flaw
                        </button>
                    </div>
                </div>
                <label className="mt-8">
                    Title
                </label>
                <input className ="bg-white border border-black border-2 mt-4 w-216 h-12 text-lg font-light text-black text-left pl-4" placeholder="T-Shirt">
                </input>
                <label className="mt-8">
                    Description
                </label>
                <textarea className ="bg-white border border-black border-2 mt-4 w-216 h-48 text-lg font-light text-black text-left pl-4 pt-4 flex items-start" placeholder="Enter a description...">
                </textarea>
                <div className="mt-8">
                    Info
                </div>
                <div className="mt-4 text-black text-lg font-light flex flex-col items-start">
                    <label htmlFor="category" className="mb-2">Category</label>
                    <select id="category" className="border border-black border-2 p-4 w-216 text-lg font-light text-black">
                        <option>Select a Category</option>
                        <option>Shirts</option>
                        <option>Pants</option>
                        <option>Hoodies and Sweatshirts</option>
                        <option>Shoes</option>
                    </select>
                </div>
                <div className="mt-4 text-black text-lg font-light flex flex-col items-start">
                    <label htmlFor="category" className="mb-2">Brand</label>
                    <select id="category" className="border border-black border-2 p-4 w-216 text-lg font-light text-black">
                        <option>Select a Brand</option>
                        <option>Gucci</option>
                        <option>Chanel</option>
                        <option>Louis Vuitton</option>
                        <option>Versace</option>
                        <option>Other</option>
                    </select>
                </div>
                <div className="mt-4 text-black text-lg font-light flex flex-col items-start">
                    <label htmlFor="category" className="mb-2">Condition</label>
                    <select id="category" className="border border-black border-2 p-4 w-216 text-lg font-light text-black">
                        <option>Condition</option>
                        <option>Like New</option>
                        <option>Good</option>
                        <option>Fair</option>
                        <option>Poor</option>
                    </select>
                </div>
                <div className="mt-4 text-black text-lg font-light flex flex-col items-start">
                    <label htmlFor="price" className="mb-2">Price</label>
                    <input
                        type="text"
                        id="price"
                        placeholder="US $"
                        className="border border-black border-2 p-4 w-216 text-lg font-light text-black"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-y-4 mt-10 ml-8">
            </div>
        </div>  
    )
}