const ShoeCard = ({imgURL, changeBigShoeImg, bigShoeImg}) => {
const handleClick= ()=>{
    if( bigShoeImg !== imgURL.bigShoe){
        changeBigShoeImg(imgURL.bigShoe)
    }
}

  return (
    <div className={`border-2 rounded-xl 
    ${bigShoeImg === imgURL.bigShoe ?'border-orange-500' : 'border-gray-300' } 
   cursor-pointer max-sm:flex-1 `} onClick={handleClick}>
    <div className="flex justify-center items-center object-contain
   sm:width-40 sm:height-40 rounded-xl ">
        <img src={imgURL.thumbnail} alt="Shoe Collection"
        width={127} height={103} className="rounded-xl" />    
    </div>
    </div>
  )
}

export default ShoeCard