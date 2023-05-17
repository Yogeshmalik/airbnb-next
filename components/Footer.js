function Footer() {
  return (
    <footer>
      <div
        className="grid grid-cols-2 md:grid-cols-4 pl-32 
      md:px-32 sm:pl-32 lg:pl-32 py-14 bg-gray-100 
      text-gray-600 gap-y-10"
      >
        <div className="space-y-4 text-xs text-left text-gray-800">
          <h5 className="font-bold">ABOUT</h5>
          <p>How Airbnb works</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Airbnb Plus</p>
          <p>Airbnb Luxe</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">COMMUNITY</h5>
          <p>Accessiblity</p>
          <p>This is not a real site</p>
          <p>It is just a clone</p>
          <p>Airbnb Clone</p>
          <p>Map is included</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p>Yogesh SM</p>
          <p>Presents</p>
          <p>Maj. Black Mamba</p>
          <p>Inside Every Hole</p>
          <p>On top of Topper</p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
          <h5 className="font-bold">Support</h5>
          <p>Help Centre</p>
          <p>Trust & Safety</p>
          <p>Hello YSM</p>
          <p>Can not turn</p>
          <p>403 into HW</p>
        </div>
      </div>
      <div className="items-center text-center m-2 ">
        <h1 className=" font-semibold hover:scale-90 hover:red ">
          MADE BY
          <a href="https://yogeshmalikportfolio.netlify.app/"> YSM</a>
        </h1>
      </div>
    </footer>
  );
}

export default Footer;
