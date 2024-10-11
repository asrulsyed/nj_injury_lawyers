import ReviewCard from "./ReviewCard";
import { reviews } from "@/stack/stack";

const Review = () => {

    return (
        <>
            <div className="w-full py-[100px] bg-[white] flex flex-col items-center">
                <p className="text-sm tracking-widest font-bold py-1 px-2 bg-color2 border-l-4 border-l-color1">Reviews</p>
                <h1 className="font-bold text-5xl pt-5 text-color3 mb-16 text-center">Our Customer's Say</h1>
                <div className="xl:w-[60%] lg:w-[70%] md:w-[80%] sm:w-[90%] w-[100%] mx-auto">
                    <div className="carousel w-full">
                        {
                            reviews.map((item, index) => {
                                return <ReviewCard index={index} itemId={`item` + index} key={item.name} item={item} className="carousel-item rounded-box mr-2 ml-2 bg-color2" />  
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review;