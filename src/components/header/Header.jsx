import logo from "../../../public/images/logo.png";

const navigation = [
  { title: "Home", href: "#" },
  { title: "Discover", href: "#" },
  { title: "Special Deals", href: "#" },
  { title: "Contact", href: "#" },
];
const Header = () => {
  return (
    <div className="container flex items-center justify-between">
      <div>
        <img src={logo} alt="landing-page" />
      </div>
      <div>
        <ul className="gap-10 hidden lg:flex ">
          {navigation.map((item, index) => (
            <li key={index} className="hover:text-bubble-gum cursor-pointer">{item.title}</li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-5">
        <button className="border border-[#eee] rounded-full hover:bg-bubble-gum  px-8 py-1">
          LogIn
        </button>
        <button className="border border-[#eee] hover:bg-bubble-gum rounded-full px-8 py-1">SignUp</button>
      </div>
    </div>
  );
};

export default Header;
