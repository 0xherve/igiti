import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex justify-center justify-self-center py-24 xl:px-48 max-xl:px-8 mt-24">
        <div id="error-page" className="h-full w-full max-md:w-fit flex flex-col justify-between items-center gap-20 bg-pale-blue p-10 leading-24 rounded-3xl shadow-xl">
      <h1 className="text-4xl font-montserrat font-bold text-orange-400">Oops!</h1>
      <p className="font-montserrat font-bold text-xl">Sorry, an error has occurred.</p>
      <p className="font-montserrat font-semibold text-lg">
        <i>Page {error.statusText || error.message}</i>
      </p>
    </div>
    </div>
    
  );
}