import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 
    rounder-xl cursor-pointer hover:bg-gray-100 hover:scale-105 
    transition transform duration-200 ease-out  "
    >
      {/* left side */}
      <div className="relative h=16 w-16">
        <Image
          className="rounded-lg"
          alt="Images"
          src={img}
          height={100}
          width={100}
          priority
        />
      </div>
      {/* right side */}
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}

export default SmallCard;

/** every component in react can take props.
 * we can reuse these component by passing different props in the same component
 * Here we have to pass img, location, distance as props
 */
