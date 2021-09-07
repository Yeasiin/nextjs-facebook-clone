import StoryCard from "./StoryCard";

const stories = [
  {
    name: "Yeasin Arfat",
    src: "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/108994553_2798819837014451_1012322898064096525_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=174925&_nc_ohc=GjU9lC2hPKgAX-CGlva&_nc_ht=scontent.fcgp3-1.fna&oh=d91520e1d093b17667aae1aaa9e46ef9&oe=615D2DD7",
    profile:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/131635019_2931463847083382_8297549411940443907_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=yhMhT9XNmuEAX-jz5cY&_nc_ht=scontent.fcgp3-1.fna&oh=6cb0b63892767bf8533b89fb88b6e253&oe=615BC672",
  },
  {
    name: "Mainul Islam",
    src: "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/75552863_951816808532169_4484904871681589248_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=e3f864&_nc_ohc=ABkUDyxeI58AX_yHmbS&_nc_ht=scontent.fcgp3-1.fna&oh=2852985cacc784a1b3b0bc16f07935db&oe=615CBCF1",
    profile:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/183593388_1392966711083841_250997892997453228_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vXOujuCrkCQAX_NXOb-&tn=CKTEiJM2mHX72s6n&_nc_ht=scontent.fcgp3-1.fna&oh=bfa5d298a194189f88e9e73090b31e62&oe=615C171E",
  },

  {
    name: "Gazi Forhad",
    src: "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/p480x480/46495354_2255693181322049_9222451011182919680_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=e3f864&_nc_ohc=zNTxgfmDE3YAX8grCyw&_nc_ht=scontent.fcgp3-1.fna&oh=362576abfa7eeca734a69e526b3e9208&oe=615E3F1A",
    profile:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/68675918_2439933672897998_8065051152766468096_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pXXRL93IsPIAX_nXjxV&tn=CKTEiJM2mHX72s6n&_nc_ht=scontent.fcgp3-1.fna&oh=e8f3e8421b1d2c3ecdd0d4cfcad82ee8&oe=615C759F",
  },
  {
    name: "Maruf Khan",
    src: "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/137071958_1422375668094384_5627276510652192970_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=zF88DwlWYtcAX9gC3Ys&_nc_ht=scontent.fcgp3-1.fna&oh=88c878798a9cb55b4bbb1ed20f69665b&oe=615BBFAC",
    profile:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/179318177_1502642746734342_4971717084746924177_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=wI7Lah_Z6QcAX81dpxi&_nc_oc=AQnV6vvDygE2FRnMhJJDHfZJ1XFSl8i3gVf4qUc6CUlcX4s_5bfph8-L8kxvEh-Um2I&_nc_ht=scontent.fcgp3-1.fna&oh=8f664f2dac6c77c7221d3eec8d17bc7e&oe=615F2B8C",
  },
  {
    name: "Bill Gates",
    src: "https://scontent.fcgp3-1.fna.fbcdn.net/v/t1.6435-9/123424494_2983130475250801_2104692149913402772_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=I6Zh_A3IghIAX_JMn83&_nc_ht=scontent.fcgp3-1.fna&oh=10e8213cbc87f6f18fc29470eba13b94&oe=615B6738",
    profile:
      "https://scontent.fcgp3-1.fna.fbcdn.net/v/t31.18172-8/26063425_859128957593743_2078046435534882449_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=tTYUSbTM24AAX9Db7Kk&_nc_ht=scontent.fcgp3-1.fna&oh=b6e64cfbd99b374d2d9c0f4a49ee265c&oe=615D6F4E",
  },
];

function Stories() {
  return (
    <div className="flex justify-center space-x-2 mx-auto">
      {stories.slice(0, 5).map((story) => (
        <StoryCard key={story.name} {...story} />
      ))}
    </div>
  );
}

export default Stories;
