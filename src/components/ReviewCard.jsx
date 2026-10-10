import { star } from '../assets/icons';
import Card from './Card';

const ReviewCard = ({ customerName, rating, feedback }) => (
  <Card className="flex w-[min(85vw,384px)] shrink-0 flex-col items-center gap-4 p-8 text-center">
    <p className="line-clamp-4 text-base leading-7 text-muted">{feedback}</p>
    <img src={star} alt="" width={24} height={24} />
    <p className="font-montserrat text-xl font-medium text-muted">{rating}</p>
    <h3 className="font-palanquin text-2xl font-bold">{customerName}</h3>
  </Card>
);

export default ReviewCard;
