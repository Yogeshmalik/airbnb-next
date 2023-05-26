import "../src/app/globals.css";
import Header from "../src/app/components/Header";
import Footer from "../src/app/components/Footer";
import { useRouter } from "next/router";
import { isValid, format, parseISO } from "date-fns";
import InfoCard from "../src/app/components/InfoCard";

function Search({ searchResults }) {
  const router = useRouter();

  /* ES6 Destructuring Starts */
  const { location, startDate, endDate, noOfGuests } = router.query;
  /* ES6 Destructuring Ends */
  const formattedStartDate = isValid(parseISO(startDate))
    ? format(parseISO(startDate), "dd MMMM yy")
    : "Invalid Start Date";
  const formattedEndDate = isValid(parseISO(endDate))
    ? format(parseISO(endDate), "dd MMMM yy")
    : "Invalid End Date";

  // const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  // const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  // console.log("routerQuery", router.query);

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} Guests`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - for {noOfGuests} guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

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

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={title}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer className="absolute bottom-0 " />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  const searchResults = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
