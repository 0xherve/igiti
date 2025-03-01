const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL) {
      changeBigShoeImg(imgURL); // Set the product image to the selected image
    }
  };

  return (
    <div
      className={`rounded-xl 
        ${bigShoeImg === imgURL ? 'border-orange-500' : 'border-gray-300'}
        cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div
        className="flex justify-center items-center object-contain
       sm:min-w-40 sm:min-h-30 rounded-xl"
      >
        {imgURL ? (
          <img
            src={imgURL} // Directly use imgURL since it's already the URL
            alt="Puzzle Thumbnail"
            width={125}
            height={105}
            className="rounded-xl object-contain"
          />
        ) : (
          <p>No Image Available</p>
        )}
      </div>
    </div>
  );
};

export default ShoeCard;
