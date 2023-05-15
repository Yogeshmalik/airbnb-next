import Banner from "../../components/Banner";
import Header from "../../components/Header";
import SmallCard from "../../components/SmallCard";
import exploreDataJson from "./exploreDataJson.json";
import cardDataJson from "./cardDataJson.json";
import MediumCard from "../../components/MediumCard";
import LargeCard from "../../components/LargeCard";
import Footer from "../../components/Footer";

const Home = ({ exploreData, cardData }) => {
  /* exploreData prop is destructuring and will fetch us info that is 
  rendered on the server */
  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          <div
            className="grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-3 
          xl:grid-cols-4"
          >
            {/* pull some data from server - API endpoints */}
            {/* currently when trying to import the json exploreData content, 
the web service jsonkeeper seems to be no longer accessible. 
Quickest thing to do is write out the json data by hand and then store it 
on a separate service, otherwise just store it locally and import. */}
            {/* {exploreData?.map(
            (item) => ( */}
            {exploreData?.map((item) => (
              <SmallCard
                key={location}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>

          <div
            className="grid grid-cols-1 
          sm:grid-cols-2 lg:grid-cols-3 
          xl:grid-cols-4"
          >
            {/* the below one is working but not the above one. FIX THAT */}
            {exploreDataJson?.map(({ img, location, distance }) => (
              <SmallCard
                key={location}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div
            className=" space-x-2 flex overflow-scroll overflow-y-hidden 
          scrollbar-hide p-3 -m-3"
          >
            {cardDataJson?.map(({ img, title }) => (
              <MediumCard key={title} img={img} title={title} />
            ))}
          </div>
        </section>

        <section>
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The Greatest Outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
};
// static rendering; we need to include an async function
export async function getStaticProps() {
  const exploreData = await fetch("https://www.jsonkeeper.com/b/4G1G").then(
    (res) => res.json()
  );
  const cardData = await fetch("https://www.jsonkeeper.com/b/VHHT").then(
    (res) => res.json()
  );
  return {
    props: {
      exploreData, // its ES6 short for exploreData: exploreData
      cardData,
    },
  };
}
/* it gives us json file from https://links.papareact.com/pyp
    when we pull the info, all the things comes with it. so we need to call 
    specific things */
/** it will just give us json containing all the info we need.
     we need to return this function in the functional component above cz
     its happening on the server before it reaches the browser to show the stuff */

export default Home;
