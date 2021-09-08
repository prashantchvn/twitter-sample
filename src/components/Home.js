import React,{useState,useEffect} from 'react'

function Home() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/Tweet")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {items.map(item => (
          <div className="tweetBox">
            <p className="user">User :{item.user}</p>
            <p className="tweet">Tweet : {item.tweet}</p>
          </div>
        ))}
      </ul>
    );
  }
}

export default Home
