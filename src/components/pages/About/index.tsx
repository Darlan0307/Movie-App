const About = () => {
  return (
    <main className="min-h-[50vh] grid place-content-center gap-8">
      <h1 className="text-3xl text-center text-primary font-bold">About API</h1>
      <p className="max-w-[400px] mx-auto text-center text-lg">
        For this project I used the TMDB API, you can also use it by clicking on
        he link below
      </p>
      <a
        className="text-xl font-bold bg-primary text-white w-40 text-center mx-auto py-2 rounded-lg underline"
        href="https://developer.themoviedb.org/docs/"
        target="_blank"
      >
        TMDB's API
      </a>
    </main>
  );
};

export default About;
