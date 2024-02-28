import "./App.css";
import useSWR from "swr";

const POSTS_API_URL = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const { data, mutate } = useSWR(POSTS_API_URL, (url) =>
    fetch(url).then((res) => res.json())
  );

  return (
    <>
      <h1>Example showing failing playwright-msw integration</h1>
      <p>
        Below, we are fetching posts from {POSTS_API_URL}. The real API has 100
        posts in it. Our mocks are set up to have 200 posts.
      </p>
      <div className="card">
        {data ? <p>Number of posts is {data.length}</p> : <p>Loading...</p>}
        <button onClick={() => mutate()}>Refetch</button>
      </div>
    </>
  );
}

export default App;
