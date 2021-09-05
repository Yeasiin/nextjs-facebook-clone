import Stories from "./Stories";
import InputBox from "./InputBox";

function NewsFeed() {
  return (
    <div className="h-screen flex-grow pb-44 pt-6 mr-4 xl:mr-40 overflow-x-auto" >
      <div className="mx-auto max-w-md md:max-w-lg lg:max-w-2xl" >
        {/* Stories */}
        <Stories />
        {/* Input Box */}
        <InputBox />
        {/* Posts */}
      </div>
    </div>
  );
}

export default NewsFeed;
