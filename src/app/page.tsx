import React from "react";
import { GetStaticProps } from "next";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import data from "./data.json";

const Home = ({ exploreData }) => {
  /* exploreData prop is destructuring and will fetch us info that is rendered on the server */
  return (
    <div>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

          {/* pull some data from server - API endpoints */}

          {exploreData?.map(
            (item: { img: string; location: string; distance: string }) => (
              <div>
                <img src={item.img} alt={item.location} />
                <h2>{item.location}</h2>
                <p>{item.distance}</p>
              </div>
            )
          )}
          {/* the below one is working but not the above one. FIX IT */}
          {data?.map((items) => (
            <div key={items.location}>
              <img src={items.img} alt={items.location} />
              <h2>{items.location}</h2>
              <p>{items.distance}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
// static rendering; we need to include an async function
export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  /* it gives us json file from https://links.papareact.com/pyp
    when we pull the info, all the things comes with it. so we need to call specific things */
  /** it will just give us json containing all the info we need.
     we need to return this function in the functional component above cz
     its happening on the server before it reaches the browser to show the stuff */
  return {
    props: {
      exploreData, // its ES6 short for exploreData: exploreData
    },
  };
}

export default Home;
