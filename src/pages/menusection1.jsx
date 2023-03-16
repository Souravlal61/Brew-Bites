import image1 from "../image/image1.jpg"
export default function Sec(){
    return(
        <>
        <section class="bg-cyan-400 dark:bg-gray-900">
   
        <div class="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <img class="w-full dark:hidden"src={image1} alt="dashboard image"/>
        
        <div class="mt-4 md:mt-0">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Where every flavor tells a story !</h2>
            <p class="mb-6 font-light text-gray-900 md:text-lg dark:text-gray-900">Restaurant that we prefer vary depending on our taste, culture, mood, previous experience and our first impression of the place.Our restaurant offers delicious dining options, with authentic flavors of Cusines of diffrent countries.</p>
           
        </div>
    </div>
</section>
        </>
    )
}