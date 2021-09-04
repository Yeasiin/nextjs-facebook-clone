import Head from "next/head";
import { getSession } from "next-auth/client";
import Header from "../components/Header";
import NewsFeed from "../components/NewsFeed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import Login from "../components/Login";

export default function Home({ session }) {
  if (!session) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Facebook</title>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* Sidebar */}
        <Sidebar />
        {/* NewsFeed */}
        <NewsFeed />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    },
  };
}
