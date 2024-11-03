import MemberCard from '../components/MemberCard'
import { urlFor} from '../assets/sanityClient'
import { useData } from '../DataContext'

const OurTeam = () => {
  const { team } = useData();
  return (
    <section >
      <h3 className="font-palanquin text-center
      text-4xl font-bold ">Meet the <span></span>
       <span className="text-orange-500">
        Team</span></h3>
      <p className="team-subtext"> Get to know the people behind Igiti Enterprises</p>

         <div className="member-container ">
          {team.map((member)=>(
             <MemberCard
             key={member.name} 
             role={member.role}
             name={member.name}
             imgURL={urlFor(member.image).url()} 
           />
          ))}
         </div>
    </section>
  )
}

export default OurTeam