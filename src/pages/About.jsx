const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              G-Max
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Welcome to our online store, where every click leads to a world of
        possibilities. We're not just selling products; we're offering you a key
        to unlock the extraordinary. Our collection is a symphony of quality,
        style, and innovation, carefully curated to meet your every need.
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Whether you're here for the latest trends, timeless classics, or
        something unique and one-of-a-kind, you'll find it all under our digital
        roof. Join us in this digital shopping journey and discover a world of
        convenience, elegance, and endless choices. Dive in, explore, and let
        your online shopping experience become a delightful adventure. Your
        desires, our dedication – the perfect match in a single click.
      </p>
    </>
  );
};

export default About;
