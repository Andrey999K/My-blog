import React, { useEffect, useState } from "react";
import Loader from "../../ui/Loader";
import PostsList from "../../common/PostsList";

const UserPage = () => {
  const [posts, setPosts] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          date: "11.05.2023",
          title: "",
          description: "Мы собрали для вас подборку свежих и актуальных книг, по всем языкам программирования.В подборке не просто новые книги для программистов, но и те книги, которые дают практическую основу с задачами и решениями для получения реального полезных навыков.",
          image: "1.jpg",
          likes: 1245,
          comments: 1138,
          user: {
            nickname: "React",
            avatar: ""
          }
        },
        {
          id: 2,
          date: "03.12.2018",
          title: "Как генерировать осмысленные коммиты. Применяем стандарт Conventional Commits",
          description: "",
          image: "",
          likes: 1245,
          comments: 1138,
          user: {
            nickname: "tashbenbetov",
            avatar: ""
          }
        },
        {
          id: 3,
          date: "10.07.2019",
          title: "React Hook Router современная альтернатива React Router",
          description: "",
          image: "3.jpg",
          likes: 1245,
          comments: 1138,
          user: {
            nickname: "freislot",
            avatar: ""
          }
        }
      ]);
    }, 1000);
  }, []);
  if (!posts) return <Loader />;
  return (
    <div className="w-[695px] my-12">
      <PostsList data={posts} />
    </div>
  );
};

export default UserPage;
