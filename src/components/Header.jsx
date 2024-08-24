import CustomButton from "./CustomButton";
import Logo from "./Logo"
import Search from "./Search";

export default () => {
  return (
    <div className="header">
      <Logo />
      <Search />
      <CustomButton />
    </div>
  );
};
