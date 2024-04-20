import { FaGithub } from "react-icons/fa";

const Rodape = () => {
  return (
    <footer className="p-10 mt-6">
      <p className="flex justify-center items-center text-xl gap-3">
        Developed by{" "}
        <a
          href="https://github.com/Darlan0307"
          target="_blank"
          className="flex items-center gap-1 cursor-pointer text-primary font-bold"
        >
          <FaGithub size={25} /> <span className="underline ">Darlan0307</span>
        </a>
      </p>
    </footer>
  );
};

export default Rodape;
