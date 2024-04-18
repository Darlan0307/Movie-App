import SectionFilters from "@/components/SectionFilters";
import SectionPagination from "@/components/SectionPagination";
import SectionProducts from "@/components/SectionProducts";
import MoveToTop from "@/utils/MoveToTop";

const Home = () => {
  return (
    <main className="flex flex-col gap-10 p-5">
      <MoveToTop />
      <SectionFilters />
      <SectionProducts />
      <SectionPagination />
    </main>
  );
};

export default Home;
