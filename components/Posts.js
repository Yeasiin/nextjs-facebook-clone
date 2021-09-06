import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebaseconfig";
import Post from "./Post";

function Posts({ posts }) {
  const [realTimePosts, loading, error] = useCollection(
    db.collection("posts").orderBy("timestamp", "desc")
  );

  return (
    <div>
      {realTimePosts
        ? realTimePosts?.docs.map((post) => <Post key={post.id} {...post.data()} />)
        : posts.map((post) => <Post key={post.id} {...post} />)}
    </div>
  );
}

export default Posts;
