const Summary = () => {
  return (
    <div className="bg-lightBlueColor">
      <div className="bg-whiteColor mx-60 border-10 border-whiteColor">

        <div className="bg-orangeColor text-fontWhite p-2 font-extrabold text-xl rounded-md">
          <h4 className="">Contact Information</h4>
        </div>
        
        <div className="text-fontBlack mt-3">
          <p>
            <span className="font-bold">Email: </span>shrek@swampmail.com
          </p>
          <p className="mt-2">
            <span className="font-bold">Phone: </span>+123 456 7890
          </p>
          <p className="mt-2 mb-3">
            <span className="font-bold">Location: </span>Shrek&apos;s Swamp, Far
            Far Away
          </p>
        </div>

        <div className="bg-orangeColor text-fontWhite p-2 font-extrabold text-xl rounded-md">
          <h4 className="">Skills</h4>
        </div>
        <div className="text-fontBlack mt-3">
          <ul className="list-disc pl-5 text-fontBlack mb-3">
            <li>Swamp Maintenance</li>
            <li>Ogre Roaring</li>
            <li>Onion Layer Analysis</li>
            <li>Donkey Management</li>
            <li>Dragon Communication</li>
          </ul>
        </div>

        <div className="bg-orangeColor text-fontWhite p-2 font-extrabold text-xl rounded-md">
          <h4 className="">Work Experience</h4>
        </div>
        <div className="text-fontBlack mt-3">
          <h4 className="font-bold text-fontBlack text-xl">Swamp Owner</h4>
          <div className="text-fontBlack">
            <p>Far Far Away | 2001 - Present</p>
            <p>
              Responsible for maintaining the swamp and keeping unwelcome guests
              away.
            </p>
          </div>

          <h4 className="font-bold text-fontBlack text-xl mt-3">
            Hero of Far Far Away
          </h4>
          <div className="text-fontBlack">
            <p>Far Far Away | 2001 - Present</p>
            <p>
              Responsible for maintaining the swamp and keeping unwelcome guests
              away.
            </p>
          </div>

          <div>
            <h4 className="bg-orangeColor text-fontWhite p-2 font-extrabold text-xl rounded-md mt-3">
              Education
            </h4>
            <div>
              <p className="mt-2">
                <span className="font-bold">Degree: </span>Degree: Advanced
                Swampology
              </p>
              <p className="mb-2">
                <span className="font-bold">Institution: </span>Institution:
                Ogre Academy, Far Far Away
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
