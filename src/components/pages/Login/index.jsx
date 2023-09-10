import React from "react";
import Icon from "../../common/Icon";

const Login = () => {
  return (
    <div className="w-full h-full flex justify-center mx-auto mt-8 md:mt-12">
      <form className="max-w-[440px] w-full flex flex-col items-center gap-4 p-5 bg-white rounded">
        <h2 className="text-2xl font-bold">Вход</h2>
        <input
          className="w-full rounded text-base px-3 py-2 border-solid border-[1px] border-my-green-200"
          placeholder="E-mail"
          type="text"
        />
        <input
          className="w-full rounded text-base px-3 py-2 border-solid border-[1px] border-my-green-200"
          placeholder="Пароль"
          type="password"
        />
        <button className="rounded flex justify-center items-center text-white bg-my-green-200 p-2 w-full hover:bg-my-green-300">Войти</button>
        <span className="text-sm">Или войдите с помощью других сервисов</span>
        <div className="flex gap-5">
          <div role="button">
            <Icon name="google" className="w-[32px] h-[32px]" />
          </div>
          <div role="button">
            <Icon name="vk" className="w-[32px] h-[32px]" />
          </div>
          <div role="button">
            <Icon name="github" className="w-[32px] h-[32px]" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
