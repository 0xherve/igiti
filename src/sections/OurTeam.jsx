import { useState, useEffect } from 'react'
import MemberCard from '../components/MemberCard'
import {client, urlFor} from '../assets/sanityClient'

const OurTeam = () => {
  const [team, setTeam ] = useState([]);
  useEffect(()=>{
    const fetchTeam = async ()=>{
      const query = '*[_type == "team"] | order (rank asc)';
      const data = await client.fetch(query);
      if (data && data.length > 0 ){
        setTeam(data)
      }
      else{
        console.warn('No team data found')
      }
    };
    fetchTeam()
  }, [])
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