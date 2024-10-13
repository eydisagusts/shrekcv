import Image from "next/image";

const Header = () => {
  return (
    <div className="bg-lightBlueColor pt-10">
      <div className="bg-lightBlueColor">
        <div className="flex flex-col items-center text-center bg-whiteColor mx-60 p-4 rounded-t-lg">
          <div className="flex flex-col items-center text-center bg-greenColor p-8 rounded-t-lg w-full">

            <div className="mb-4">
              <Image
                src="/assets/images/shrek.jpg"
                alt="Shrek"
                width={150}
                height={150}
                className="rounded-full border-4"
              />
            </div>
            
            <div className="font-arial">
              <h1 className="font-extrabold text-3xl">Shrek</h1>
              <p className="font-semibold italic">
                Swamp Enthusiast | Ogre Extraordinaire
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
