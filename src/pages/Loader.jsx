import { loadPic } from '../assets/images';

const Loader = () => (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-10 bg-white">
    <img src={loadPic} alt="Igiti Enterprises" className="h-auto w-[180px] max-w-[80%]" />
    <p className="text-xl text-gray-500">Loading...</p>
    <div className="size-8 animate-spin rounded-full border-4 border-gray-200 border-t-brand-500 motion-reduce:animate-none" />
  </div>
);

export default Loader;
