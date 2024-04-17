import SectionFilters from "@/components/SectionFilters";

const Home = () => {
  return (
    <main className="flex flex-col gap-10 p-5">
      <SectionFilters />
      <section>produtos</section>
      <section>pagination</section>
    </main>
  );
};

export default Home;
