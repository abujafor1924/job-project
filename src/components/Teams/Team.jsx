// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const team = [
  {
    _id: "1",
    name: "John Smith",
    image:
      "https://thumbs.dreamstime.com/z/happy-asian-man-portrait-passport-camera-travel-photography-against-pink-studio-background-male-person-happy-284378180.jpg?w=768",
    position: "Photographer",
  },
  {
    _id: "2",
    name: "Emily Johnson",
    image:
      "https://thumbs.dreamstime.com/z/person-holding-camera-set-up-shooting-photographer-looks-s-viewfinder-takes-pictures-object-black-193645745.jpg?w=576",
    position: "Photographer",
  },
  {
    _id: "3",
    name: "Michael Davis",
    image:
      "https://thumbs.dreamstime.com/z/year-old-man-active-trekking-nepal-photographer-explores-national-culture-elderly-person-travel-healthy-lifestyle-192258122.jpg?w=992",
    position: "Photographer",
  },
  {
    _id: "4",
    name: "Sarah Anderson",
    image:
      "https://thumbs.dreamstime.com/z/photographer-portrait-11051382.jpg?w=576",
    position: "Photographer",
  },
  {
    _id: "5",
    name: "king Anderson",
    image:
      "https://thumbs.dreamstime.com/z/male-shirt-tie-holds-dslr-camera-isolated-14798144.jpg?w=992",
    position: "Photographer",
  },
];

const breakpoints = {
  // When window width is >= 320px
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  // When window width is >= 480px
  480: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  // When window width is >= 768px
  768: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};
const Team = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium my-10 text-center">
        Our Team Member
      </h1>

      <Swiper
        breakpoints={breakpoints}
        watchSlidesProgress={true}
        slidesPerView={4}
        className="mySwiper"
      >
        {team.map((team) => (
          <SwiperSlide key={team._id}>
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <div className="flex flex-col items-center pb-10">
                <img
                  className="w-24 h-24 mb-3 rounded-full shadow-lg"
                  src={team.image}
                  alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {team.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {team.position}
                </span>
                <div className="flex mt-4 space-x-3 md:mt-6">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                  >
                    Message
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Team;
