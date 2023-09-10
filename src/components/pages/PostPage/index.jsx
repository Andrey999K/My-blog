import React, { useEffect, useState } from "react";
import Avatar from "../../common/Avatar";
import { Link } from "react-router-dom";
import SubscriptionButton from "../../common/SubscriptionButton";
import Icon from "../../common/Icon";
import Like from "../../common/Like";
import Loader from "../../ui/Loader";

const PostPage = () => {
  const [data, setData] = useState(null);
  const homepage = process.env.PUBLIC_URL;
  useEffect(() => {
    setTimeout(() => {
      setData({
        comments: [
          {
            id: 1,
            user: {
              id: 123,
              username: "tashbenbetov"
            },
            date: "03.12.2018",
            text: "Прочитал про первый хук и дальше уже читать не стал. Это на уровне старого мема про подключение жуквери для суммирования двух переменных. То есть это на столько простая реализация, что вообще не понятно как она может потянуть на лишнюю зависимость. Но с модалками очень много тонкостей, включая скрытие скролла у документа, закрытие окна по клику в любой части документа за пределами модалки (если она не на весь экран) и т.д. и т.п. Вот если бы хоть часть из этих моментов перекрывалась, то еще имело смысл. А так? Ну такое…"
          },
          {
            id: 2,
            user: {
              id: 123,
              username: "tashbenbetov"
            },
            date: "03.12.2018",
            text: "Прочитал про первый хук и дальше уже читать не стал. Это на уровне старого мема про подключение жуквери для суммирования двух переменных. То есть это на столько простая реализация, что вообще не понятно как она может потянуть на лишнюю зависимость. Но с модалками очень много тонкостей, включая скрытие скролла у документа, закрытие окна по клику в любой части документа за пределами модалки (если она не на весь экран) и т.д. и т.п. Вот если бы хоть часть из этих моментов перекрывалась, то еще имело смысл. А так? Ну такое…"
          },
          {
            id: 3,
            user: {
              id: 123,
              username: "tashbenbetov"
            },
            date: "03.12.2018",
            text: "Прочитал про первый хук и дальше уже читать не стал. Это на уровне старого мема про подключение жуквери для суммирования двух переменных. То есть это на столько простая реализация, что вообще не понятно как она может потянуть на лишнюю зависимость. Но с модалками очень много тонкостей, включая скрытие скролла у документа, закрытие окна по клику в любой части документа за пределами модалки (если она не на весь экран) и т.д. и т.п. Вот если бы хоть часть из этих моментов перекрывалась, то еще имело смысл. А так? Ну такое…"
          }
        ]
      });
    }, 1000);
  }, []);
  if (!data) return <Loader />;
  return (
    <div className="w-full max-w-screen-lg ml-auto my-12">
      <div className="bg-white rounded p-5 flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Link to={homepage} className="flex gap-3 items-center">
            <Avatar/>
            <div className="flex flex-col">
              <span className="text-sm font-medium">ru_vds</span>
              <span className="text-xs text-gray-400">1,3 млн подписчиков</span>
            </div>
          </Link>
          <SubscriptionButton/>
        </div>
        <span className="text-xs text-gray-400">11.05.2023</span>
      </div>
      <h2 className="font-medium text-2xl">5 React-хуков, которые пригодятся в любом проекте</h2>
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center">
          <Like/>
          <span>1245</span>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <Icon name="eye" />
          </div>
          <span>5456</span>
        </div>
      </div>
      <p>
        Хочу рассказать о пяти простых React-хуках, которые пригодятся в любом проекте. Причём, полезность этих хуков не зависит от того, в каком именно приложении их будут использовать. Описывая каждый из них, я рассказываю о его реализации и привожу пример его использования в клиентском коде.
      </p>
      <img src={`${homepage}/images/post1_img1.jpg`} alt="Картинка"/>
      <h3 className="text-xl font-medium">Хук useModalState</h3>
      <div className="flex flex-col gap-3">
        <p>
          Модальные окна широко используются в веб-приложениях, они применяются в самых разных ситуациях. При работе с подобными окнами быстро приходит понимание того, что управление их состоянием — это трудоёмкая задача, решая которую, приходится постоянно выполнять одни и те же рутинные действия. А если имеется код, написание которого отнимает немало сил и времени, код, который приходится постоянно повторять в разных местах приложения, это значит, что такой код имеет смысл абстрагировать, оформив в виде самостоятельной сущности. Хук useModalState — это именно такой код, используемый для управления состоянием модальных окон.
        </p>
        <p>
          Собственные версии этого хука предоставляют многие библиотеки. Одна из них — это Chakra UI. Если вас интересуют подробности об этой библиотеке — вот мой материал о ней.
        </p>
        <p>
          Реализация useModalState весьма проста, даже тривиальна. Но опыт подсказывает мне, что гораздо лучше пользоваться им, чем постоянно заново писать код для управления состоянием модальных окон.
        </p>
        <p>Вот код этого хука:</p>
      </div>
      <img src={`${homepage}/images/post1_img2.jpg`} alt="Картинка"/>
      <div className="flex gap-1">
        <span>Теги:</span>
        <ul className="flex text-sky-500 gap-1">
          <li className="hover:underline cursor-pointer">React,</li>
          <li className="hover:underline cursor-pointer">разработка,</li>
          <li className="hover:underline cursor-pointer">ruvds_перевод</li>
        </ul>
      </div>
    </div>
      <div className="mt-14 p-5 bg-white rounded flex flex-col gap-4">
        <h3 className="font-medium">Комментарии {data.comments.length}</h3>
        <ul className="flex flex-col gap-4">
          {data.comments.map(({ id, user, date, text }) => (
            <li key={`comment_${id}`}>
              <div className="flex gap-3 items-center">
                <Link to={`${homepage}/user/${user.id}`} className="flex gap-3 items-center">
                  <Avatar/>
                  <span>{user.username}</span>
                </Link>
                <Link to={`${homepage}/user/${user.id}`} className="text-sm text-gray-500">{date}</Link>
              </div>
              <p className="mt-2">
                {text}
              </p>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center">
          <button className="py-1 px-5 bg-my-green-200 text-white rounded-lg hover:bg-my-green-300 duration-200">Загрузить ещё</button>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
