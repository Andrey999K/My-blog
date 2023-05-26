import React from "react";

const Login = () => {
  return (
    <div className="w-full h-full flex justify-center items-center m-auto">
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
        <button className="rounded flex justify-center items-center text-white bg-my-green-200 p-2 w-full">Войти</button>
        <span className="text-sm">Или войдите с помощью других сервисов</span>
        <div className="flex gap-5">
          <div>
            1
          </div>
          <div>
            1
          </div>
          <div>
            1
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
