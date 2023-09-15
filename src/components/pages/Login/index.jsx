import React, { useState } from "react";
import Icon from "../../common/Icon";
import httpService from "../../../services/http.service";

const Login = () => {
  const [form, setForm] = useState({
    login: "",
    password: ""
  });
  const handleChange = (e) => {
    setForm(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    httpService.post("http://localhost:5000/api/v1/login", form)
      .then(res => console.log(res))
      .catch(error => console.error(error));
  };
  return (
    <div className="w-full h-full flex justify-center mx-auto mt-8 md:mt-12">
      <form
          onSubmit={handleSubmit}
          className="max-w-[440px] w-full flex flex-col items-center gap-4 p-5 bg-white rounded"
      >
        <h2 className="text-2xl font-bold">Вход</h2>
        <input
          value={form.login}
          onChange={handleChange}
          className="w-full rounded text-base px-3 py-2 border-solid border-[1px] border-my-green-200"
          placeholder="E-mail"
          type="text"
          name="login"
        />
        <input
          value={form.password}
          onChange={handleChange}
          className="w-full rounded text-base px-3 py-2 border-solid border-[1px] border-my-green-200"
          placeholder="Пароль"
          type="password"
          name="password"
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
