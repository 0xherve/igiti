const Button = ( {label, iconURL, backgroundColor, textColor, borderColor, link}) => {
  return (
    <a href={link} >
      <button className={`flex justify-center align-center border border-solid
     gap-2 px-7 py-4 font-montserrat text-lg leading-none  
    ${backgroundColor?`${backgroundColor} ${textColor} ${borderColor}`:
    "bg-orange-500 text-white "} rounded-full` }>
      {label}
      
      {iconURL && <img src={iconURL} alt="arrow right icon"
      className="ml-2 rounded-full w-5 h-5" />}
    </button> 
    </a>
  )
}

export default Button