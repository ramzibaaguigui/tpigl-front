import PostingCard from "./PostingCard";


const BestPostings = () => {
    return (
        <div className="w-full  items-center flex flex-col pt-6">
            <div className="flex flex-col justify-center">
                <span className="text-3xl font-bold text-center p-2">The Best Posting</span>
                <span className="text-2xl font-bold text-theme-orange p-4">The best choice to buy or rent a house</span>
            </div>

            <div className="flex flex-row w-full h-fit justify-center">
                <PostingCard
                    estateImageSource={"https://images.pexels.com/photos/8755443/pexels-photo-8755443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    postingType={'Rent'}
                    estateTitle={'Villa a vendre bonne '}
                    estateLocation={'Tebessa'}
                    estatePrice={'23333DA'}
                    estateRef={'REF: 50'}
                    estateArea={'98.98m2'}
                />
            </div>
        </div>
    );

}

export default BestPostings;