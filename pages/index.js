import Head from "next/head";
import { getSession } from "next-auth/client";
// import { useSession } from "next-auth/client";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Login from "../components/Login";
import { db } from "../firebaseconfig";

export default function Home({ session,posts }) {
  if (!session) return <Login />;

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />

      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* NewsFeed */}
        <NewsFeed posts={posts} />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      session,
      posts: docs,
    },
  };
}
