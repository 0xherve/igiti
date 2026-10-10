import Card from './Card';

const MemberCard = ({ role, name, imgURL }) => (
  <Card className="flex flex-col items-center p-8 text-center">
    <img loading="lazy" decoding="async" src={imgURL} alt={name} className="mb-5 size-36 rounded-full object-cover" />
    <h3 className="font-palanquin text-2xl font-bold">{name}</h3>
    <p className="mt-1 font-montserrat font-medium text-muted">{role}</p>
  </Card>
);

export default MemberCard;
