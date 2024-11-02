const MemberCard = ({role, name, imgURL}) => {
  return (
    <div className='member-card'>
        <img src={imgURL} alt={name}
        className='team-img' />
        <div className='member-info'>
          <h3 className='member-info_h3'>{name}</h3>
          <p className='member-info_p'>{role}</p>
        </div>
    </div>
  )
}

export default MemberCard