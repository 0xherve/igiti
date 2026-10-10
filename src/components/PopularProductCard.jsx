import { star } from '../assets/icons';
import Card from './Card';

const PopularProductCard = ({ link, imgURL, name, price, rating, description }) => (
  <Card href={link} className="flex h-full flex-col gap-5 p-6 text-center transition-colors hover:border-brand-400">
    <div className="flex h-64 items-center justify-center rounded-xl bg-surface p-4">
      {imgURL && <img loading="lazy" decoding="async" src={imgURL} alt={name} className="max-h-full max-w-full object-contain" />}
    </div>
    <div className="flex flex-1 flex-col items-center gap-3">
      {rating != null && (
        <div className="flex items-center gap-2 text-lg text-muted">
          <img src={star} alt="" width={20} height={20} />
          <span>{rating}</span>
        </div>
      )}
      <h3 className="font-palanquin text-2xl font-semibold leading-snug">{name}</h3>
      {description && <p className="line-clamp-3 text-base leading-relaxed text-muted">{description}</p>}
      <p className="mt-auto pt-2 text-xl font-semibold text-brand-600">{price}</p>
    </div>
  </Card>
);

export default PopularProductCard;
