function HeaderIcon({ active, Icon }) {
  return (
    <div className=" flex items-center cursor-pointer md:hover:bg-gray-100 rounded-xl px-2 sm:h-12 md:px-10 border-transparent border-b-2 active:border-blue-500 group ">
      <Icon
        className={`h-5 text-gray-500 sm:h-7 mx-auto group-hover:text-blue-500 ${
          active && "text-blue-500"
        } `}
      />
    </div>
  );
}

export default HeaderIcon;
