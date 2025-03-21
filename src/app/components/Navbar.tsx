import Link from "next/link";
import Search from "./Search";

const Navbar = () => {
  return (
    <nav className="p-4 flex justify-between flex-col md:flex-row sticky top-0 bg-gradient-to-r from-navy to-skyblue drop-shadow-xl">
      <h1 className="text-xl md:text-2xl italic font-bold text-white grid place-content-center mb-4 md:mb-0">
        <Link href="/">Wiki-Search by LoSeYi</Link>
      </h1>
      <Search />
    </nav>
  );
};
export default Navbar;
