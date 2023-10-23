import { useRouteError } from "react-router-dom";
const error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <>
      <h1>OOPS!!!!</h1>
      <h2>Kuch Galat hogyaaaaa</h2>
      <h2>{error.status}</h2>
      <h2>{error.statusText}</h2>
    </>
  );
};
export default error;
