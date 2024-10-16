import FaqItem from "../components/FaqItem"

const Faq = () => {
  return (
    <div>
        <h1 className="flex text-center justify-center  text-2xl text-orange-400 font-montserrat font-bold m-5 ">
            Frequently asked Questions
        </h1>
        <div className="border-4 border-[#fff5f1] p-5 my-4 mx-10 rounded-3xl">
        <FaqItem/>
    </div>
    </div>
    
  )
}

export default Faq