import Card from './Card';

const ServiceCard = ({ imgURL, label, subtext }) => (
  <Card className="flex flex-col gap-4 p-8">
    <div className="flex items-center gap-4">
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-brand-500">
        <img src={imgURL} alt="" width={24} height={24} />
      </span>
      <h3 className="text-xl font-semibold text-brand-500">{label}</h3>
    </div>
    <p className="text-base leading-7 text-muted">{subtext}</p>
  </Card>
);

export default ServiceCard;
