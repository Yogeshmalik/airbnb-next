import "../src/app/globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  return (
    <div>
      <Header />
      <main className="flex h-screen">
        <div>Hello</div>
      </main>
      <Footer className='absolute bottom-0 ' />
    </div>
  );
}

export default Search;
