import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";

const fetchCategories = async () => {
    const response = await fetch('http://localhost:5000/category');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
};

const CategorySlider = () => {

    const { data: categories, error, isLoading } = useQuery({
        queryKey: ['categories'], // Pass the query key here
        queryFn: fetchCategories   // Pass the fetch function here
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="max-w-[1400px] mx-auto px-8 md:py-8">
            <div className="flex justify-between items-center">
                <h2 className="md:text-4xl font-bold my-8">Choose Your Category</h2>
                <Link to={'/allCategory'}>
                    <button className="BTN">
                        <span>See more</span>
                    </button>
                </Link>
            </div>
            <div>
                <Swiper
                    spaceBetween={15}
                    modules={[Pagination]}
                    className="mySwiper"
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        426: {
                            slidesPerView: 1.5,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 3.5,
                        },
                    }}
                >
                    {categories?.map(category => (
                        <SwiperSlide key={category?._id}>
                            <Link to={`/products/${category?.category}`}>
                                <div className="shadow-lg rounded-xl my-5 border-2 border-[#363f4c] p-2 bg-[#20293e]">
                                    <figure>
                                        <img className="border-[#333c49] w-full md:h-[250px] h-[250px] object-cover rounded-t-xl" src={category?.image} alt="Category" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="md:text-xl capitalize">{category?.category}</h2>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CategorySlider;
