import { useNavigate } from "react-router-dom";
import blue from "../assets/blue.webp";
import grey from "../assets/grey.webp";
import yellow from "../assets/yellow.webp";
import red from "../assets/red.webp";

const profiles = [
  { name: "Recruiter", image: blue, path: "/profile/recruiter" },
  { name: "Developer", image: grey, path: "/profile/developer" },
  { name: "Stalker", image: yellow, path: "/profile/stalker" },
  { name: "Adventurer", image: red, path: "/profile/adventurer" },
];

const WhoIsWatching = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-10">Who’s Watching?</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="cursor-pointer hover:scale-105 transform transition duration-300 text-center"
            onClick={() => navigate(profile.path)}
          >
            <img
              src={profile.image}
              alt={profile.name}
              loading="lazy" 
              className="w-28 h-28 md:w-40 md:h-40 object-cover border-4 border-transparent hover:border-white"
            />
            <p className="mt-3 text-lg">{profile.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhoIsWatching;
