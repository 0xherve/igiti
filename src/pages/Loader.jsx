// Loader.js
import { loadPic } from '../assets/images';

const Loader = () => {
  return (
    <div className="loader flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col items-center">
        <img src={loadPic} alt="Igiti Logo" className="logo-image" />
        <p className="text-gray-500 text-xl mt-16 -mb-8">Loading...</p>
      </div>
      <div className="spinner" />
    </div>
  );
};

export default Loader;
