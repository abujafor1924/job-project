const photo = [
  "https://photographylife.com/wp-content/uploads/2016/06/Dragonfly.jpg",
  "https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/833418/pexels-photo-833418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2295744/pexels-photo-2295744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/162318/cheetahs-cubs-two-together-162318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/1001976/pexels-photo-1001976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/122892/pexels-photo-122892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://dvyvvujm9h0uq.cloudfront.net/com/articles/1594059794-164468-diana-parkhouse-y7mzlrgkf4i-unsplashjpg.jpg",
];

const Photos = () => {
  return (
    <div className="w-11/12 mx-auto my-4">
      <h1 className="text-4xl font-semibold text-center my-10">Photos</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
        {photo.map((pt, index) => (
          <div key={index} className="relative group">
            <img
              src={pt}
              alt="Shoes"
              className="w-80 md:h-96 h-60 transition-transform transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black  bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
