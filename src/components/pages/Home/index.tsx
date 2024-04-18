import SectionFilters from "@/components/SectionFilters";
import SectionProducts from "@/components/SectionProducts";
import MoveToTop from "@/utils/MoveToTop";

const Home = () => {
  return (
    <main className="flex flex-col gap-10 p-5">
      <MoveToTop />
      <SectionFilters />
      <SectionProducts />
      <section>pagination</section>
    </main>
  );
};

export default Home;
