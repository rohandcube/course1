

const VideoSection = () => {
  return (
    <section className="flex flex-col items-center p-6 bg-gray-background">
      <div className="w-full md:w-3/4 lg:w-1/2">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/hBNZcgqjFiI?autoplay=1&controls=1&modestbranding=1&rel=0&showinfo=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold mb-2">Discover Our Story</h2>
        <p className="text-lg">
          Watch our video to learn more about our mission and the work we do. Experience the journey of innovation and excellence.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
