import { useParams } from 'react-router-dom';

const Landing = () => {
  const { name } = useParams();
  const formattedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold mb-4">
        Welcome, {formattedName} 👋
      </h1>
      <p className="text-lg max-w-xl">
        This is the personalized dashboard for <span className="text-red-500 font-semibold">{formattedName}</span>.  
        You can show different sections here depending on the profile type.
      </p>
    </div>
  );
};

export default Landing;
