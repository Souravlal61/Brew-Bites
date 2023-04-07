
import banner6 from"../image/banner6.jpg"

export default function Flowcrousel(){
    return(
        <>
          <div className="flex container">
      <h1 className=" mt-40 ml-28 font-bold text-4x1 text-center text-lg text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">For the love of Delicious food .</h1>
      {/* <h1 className="ml-28 font-bold text-4x1 text-center mt-40 text-lg text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">We Serves that you want. Good Food Good Health</h1> */}
   
    <img
      src={banner6}
      alt="image"
      className="mt-0 ml-auto h-96 shadow-sm-light bg-white container">
     
    </img>
 
    </div> 
        </>
    )
}
