import MemberCard from '../components/MemberCard'
import {team} from '../constants'

const OurTeam = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center
      text-4xl font-bold">Meet the <span></span>
       <span className="text-orange-500">
        Team</span></h3>
      <p className="info-text m-auto mt-4 max-w-lg text-center text-lg font-medium"> Get to know the people behind Igiti Enterprises</p>
         <div className="mt-24 flex flex-1 justify-evenly 
         items-center max-lg:flex-col gap-14 ">
          {team.map((member)=>(
             <MemberCard
             key={member.name} 
             role={member.role}
             name={member.name}
             imgURL={member.imgURL} 
           />
          ))}
         </div>
    </section>
  )
}

export default OurTeam