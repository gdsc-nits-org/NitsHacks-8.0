import { Button } from "../../Components";
import { useFetchOnAction } from "../../Hooks";

const Home = () => {
  const [fetchData, fetchFunc] = useFetchOnAction();

  const { data, loading, error } = fetchData;

  const handleClick = () => {
    fetchFunc("/db/demo.json");
  };

  return (
    <main className="h-screen">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1 className="font-bold">Home Page</h1>
          {error ? <h2 className="text-red-600">{error}</h2> : <h2>{data?.msg}</h2>}
          <Button type="button" onClick={handleClick}>
            Health Check
          </Button>
        </>
      )}
    </main>
  );
};

export default Home;
