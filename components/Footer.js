function Footer() {
  return (
    <footer>
      <div
        className="grid grid-cols-2 md:grid-cols-4 px-20 
      md:px-32 sm:pl-32 lg:px-32 py-14 bg-gray-100 
      text-gray-600 gap-y-10"
      >
        <div className="space-y-4 pr-2 text-xs text-left text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 pl-2 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessiblity</p>
          <p>This is not a real site</p>
          <p>It is just a clone</p>
          <p>Airbnb Clone</p>
          <p>Map is included</p>
        </div>
        <div className="space-y-4 pr-2 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Yogesh SM</p>
          <p>Presents</p>
          <p>Maj. Black Mamba</p>
          <p>In every opening</p>
          <p>On top of Topper</p>
        </div>
        <div className="space-y-4 pl-2 text-xs text-gray-800">
          <h5 className="font-bold">Support</h5>
          <p>Help Centre</p>
          <p>Trust & Safety</p>
          <p>Mamba Mentality</p>
          <p>Can not turn</p>
          <p>304 into HW</p>
        </div>
      </div>
      <div className="items-center bg-gray-200 text-center p-5">
        <h1 className="inline-block font-semibold ">
          MADE BY
          <a
            className="inline-block pl-2 ease-out font-bold hover:scale-150 
            hover:text-[#fD5B61] transition duration-150 "
            href="https://yogeshmalikportfolio.netlify.app/"
          >
            {" "}
            YSM
          </a>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
