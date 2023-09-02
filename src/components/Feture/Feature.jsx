const Feature = () => {
  return (
    <div className="mb-32">
      <h1 className="text-4xl font-semibold text-center my-16">
        Feature Image
      </h1>
      <div className="md:flex  ">
        <div className="md:w-1/2 w-full relative">
          <img
            src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/07/24/21/pie-aerts.jpg?quality=75&width=640&auto=webp"
            alt=""
            className="w-[70%]  md:h-[500px] h-[360px] mx-auto rounded "
          />
          <img
            src="https://i0.wp.com/www.saevus.in/wp-content/uploads/2017/05/tumblr_ms21cuNeJb1qa0ri9o1_1280.jpg?w=800&ssl=1"
            alt=""
            className="md:w-72 w-44 md:h-48 h-32 absolute top-[70%]  ml-[45%] rounded"
          />
        </div>
        <div className="md:w-1/2 w-full md:text-left text-center px-8 md:mt-10 mt-20">
          <h1 className="text-2xl font-semibold my-4">Asb Design</h1>
          <p className=" font-normal md:w-[70%] md:text-left  text-center ">
            In todays photography landscape, the dominance of smartphone cameras
            is undeniable. These devices have evolved with multiple lenses, AI
            enhancements, and computational photography techniques,
            democratizing photography for the masses.
          </p>
          <p className=" font-normal md:w-[70%] md:text-left text-center  mt-8">
            Simultaneously, traditional digital cameras have improved with
            high-resolution sensors, better low-light performance, and compact
            mirrorless options. Drones equipped with cameras have opened up new
            creative possibilities with stunning aerial shots. Furthermore,
            artificial intelligence plays a pivotal role, offering automatic
            scene recognition, image stabilization, and various editing
            enhancements, redefining the way we capture and share moments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Feature;
