const MemberCard = ({role, name, imgURL}) => {
  return (
    <div className='flex justify-between w-[70%] h-[45%] items-center
    flex-col shadow-xl rounded-2xl border-slate-500 border-gray-1'>
        <img src={imgURL} alt={name}
        className='rounded-full object-cover 
        w-[130px] height-[130px]' />
        <div className='p-8 flex flex-col justify-between items-center gap-2.5'>
          <h3 className='mt-1 font-palanquin text-3xl
            text-center  font-bold mb-9'>{name}</h3>
            <p className='font-montserat text-slate-gray font-medium mb-10'>{role}</p>
            
        </div>
    </div>
  )
}

export default MemberCard