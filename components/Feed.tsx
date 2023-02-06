import { Tweet } from "../typings";
import { TweetBox } from "./TweetBox";
import TweetComponent from "../components/Tweet";
import { fetchTweets } from "../utils/fetchTweets";
import { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing...");
    const tweets = await fetchTweets();
    setTweets(tweets);

    toast.success("Feed Updated!", {
      id: refreshToast,
    });
  };

  console.log(tweets);
  return (
    <div
      className="col-span-7 lg:col-span-5 border-x max-h-screen 
      overflow-scroll scrollbar-hide"
    >
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        {/* Refresh Icon as svg  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          onClick={handleRefresh}
          className="w-6 h-6 mr-5 mt-5 cursor-pointer text-twitter transition-all 
        duration-500 ease-out hover:rotate-180 active:scale-125"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
      </div>
      {/* Tweet box */}

      <div>
        <TweetBox setTweets={setTweets} />
      </div>

      {/* Feed  */}
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}
export default Feed;
