const ShoeCard = ({ imgURL, changeBigShoeImg, bigShoeImg }) => {
  const selected = bigShoeImg === imgURL;

  return (
    <button
      type="button"
      aria-pressed={selected}
      aria-label="Show this puzzle image"
      onClick={() => !selected && changeBigShoeImg(imgURL)}
      className={`aspect-square w-full overflow-hidden rounded-lg border-2 bg-white transition-colors ${
        selected ? 'border-brand-500' : 'border-line hover:border-brand-400'
      }`}
    >
      {imgURL ? (
        <img loading="lazy" decoding="async" src={imgURL} alt="" className="size-full object-cover" />
      ) : (
        <span className="text-sm text-muted">No image available</span>
      )}
    </button>
  );
};

export default ShoeCard;
