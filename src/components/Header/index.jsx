import React from "react";
import Logo from "../Logo";
import BigButton from "../BigButton";

const Header = () => {
  return (
    <header className="bg-my-green-200 py-2">
      <div className="flex justify-between items-center w-full max-w-screen-xl px-8 mx-auto">
        <Logo/>
        <BigButton link={true} url={`${process.env.PUBLIC_URL}/login`}>Войти</BigButton>
      </div>
    </header>
  );
};

export default Header;
