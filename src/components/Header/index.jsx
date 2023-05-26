import React from "react";
import Logo from "../Logo";
import BigButton from "../BigButton";
import Icon from "../Icon";
import { Link } from "react-router-dom";

const Header = () => {
  const homepage = process.env.PUBLIC_URL;
  return (
    <header className="bg-my-green-200 py-2 sticky top-0">
      <div className="flex justify-between items-center w-full max-w-screen-xl px-8 mx-auto">
        <ul className="inline-flex flex-col gap-5 absolute top-32">
          <li className="shrink">
            <Link to={homepage} className="flex gap-4">
              <div>
                <Icon name="fire" className="w-[22px] h-[30px]" />
              </div>
              <span>Популярное</span>
            </Link>
          </li>
          <li className="shrink">
            <Link to={homepage} className="flex gap-4">
              <div>
                <Icon name="clock" />
              </div>
              <span>Свежее</span>
            </Link>
          </li>
          <li className="shrink">
            <Link to={homepage} className="flex gap-4">
              <div>
                <Icon name="bookmark" />
              </div>
              <span>Закладки</span>
            </Link>
          </li>
          <li className="shrink">
            <Link to={homepage} className="flex gap-4">
              <div>
                <Icon name="list" />
              </div>
              <span>Подписки</span>
            </Link>
          </li>
        </ul>
        <Logo/>
        <BigButton link={true} url={`${process.env.PUBLIC_URL}/login`}>Войти</BigButton>
      </div>
    </header>
  );
};

export default Header;
