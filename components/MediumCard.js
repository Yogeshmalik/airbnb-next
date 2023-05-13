import Image from "next/image";

function MediumCard({ img, title }) {
  return (
    <div>
      <div>
        <Image src={img} height={100} width={100} alt="img" />
      </div>
      <div>
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default MediumCard;
