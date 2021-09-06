import Stories from "./Stories";
import InputBox from "./InputBox";
import Posts from "./Posts";

function NewsFeed({ posts }) {
  return (
    <div className="h-screen flex-grow pb-44 pt-6 ml-4 mr-4 xl:mr-20 xl:ml-28 overflow-y-auto  scrollbar-hide ">
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-lg">
        {/* Stories */}
        <Stories />
        {/* Input Box */}
        <InputBox />
        {/* Posts */}
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default NewsFeed;
