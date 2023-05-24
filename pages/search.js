import "../src/app/globals.css";
import Header from "../src/app/components/Header";
import Footer from "../src/app/components/Footer";

function Search() {
  return (
    <div>
      <Header />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">300+ Stays for 8 number of guests</p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">Stays in Jupiter</h1>

          <div
            className="hidden lg:inline-flex mb-5 space-x-3 
          text-gray-800 whitespace-nowrap"
          >
            <p className="button">Cancellation Flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More Filters</p>
          </div>
        </section>
      </main>
      <Footer className="absolute bottom-0 " />
    </div>
  );
}

export default Search;
