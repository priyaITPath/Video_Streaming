import React from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";

export default function Home() {
  const series = [
    {
      title: "All Of Us Are Dead",
      img: "https://www.themoviedb.org/t/p/original/pTEFqAjLd5YTsMD6NSUxV6Dq7A6.jpg",
      authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      authorName: "Sidi dev",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      img: "https://www.tvguide.com/a/img/catalog/provider/1/2/1-8731334567.jpg",
      authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      img: "https://flxt.tmsimg.com/assets/p19174483_b_v8_aa.jpg",
      authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
      authorName: "Luis",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      img: "https://asianwiki.com/images/d/d9/Start-Up-CP1.jpg",
      authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Lourin",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
  ]

  const latest = [
    {
      title: "What is SaaS? Software as a Service Explained",
      img: "https://www.letsfindmovie.com/wp-content/uploads/2021/07/jNZL1WoB5OtF36LWEb0vRSJC37f-1.jpg",
      authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
      authorName: "Sidi dev",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "A Quick Guide to WordPress Hosting",
      img: "https://m.media-amazon.com/images/M/MV5BODQ4Mjg2N2QtNTYwMS00ZDJiLTgzZjAtNjA3YmZlMzVmNjQ4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
      authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
      authorName: "Micheal",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "7 Promising VS Code Extensions Introduced in 2022",
      img: "https://static.digit.in/OTT/v2/images/tr:w-1200/ben-and-jody-485217.jpg",
      authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
      authorName: "Luis",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
    {
      title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
      img: "https://assets.gadgets360cdn.com/pricee/assets/product/202204/Bhool_Bhulaiyaa_2_1650976194.jpeg",


      authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
      authorName: "Lourin",
      date: "Jan 4 2022",
      href: "javascript:void(0)",
    },
  ];
const movies = [
  {
    title: "What is SaaS? Software as a Service Explained",
    img: "https://m.media-amazon.com/images/M/MV5BYmZhNjhkN2UtN2I3NS00MzUyLTg3M2YtNjRjN2Y2NmNhNzUxXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    authorLogo: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
    authorName: "Sidi dev",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "A Quick Guide to WordPress Hosting",
    img: "https://musicart.xboxlive.com/7/efee4500-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080",
    authorLogo: "https://api.uifaces.co/our-content/donated/FJkauyEa.jpg",
    authorName: "Micheal",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "7 Promising VS Code Extensions Introduced in 2022",
    img: "https://m.media-amazon.com/images/M/MV5BMTllZDJhMTAtMjhmZi00MzBjLTljMmQtMmNlYTAwYmY0Y2Q0XkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
    authorLogo: "https://randomuser.me/api/portraits/men/46.jpg",
    authorName: "Luis",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },
  {
    title: "How to Use Root C++ Interpreter Shell to Write C++ Programs",
    img: "https://bhavnatalkies.files.wordpress.com/2022/04/jersey.jpg",
    authorLogo: "https://api.uifaces.co/our-content/donated/KtCFjlD4.jpg",
    authorName: "Lourin",
    date: "Jan 4 2022",
    href: "javascript:void(0)",
  },

]
  return (
    <section className="mt-12 mx-auto px-4 max-w-screen-xxl lg:px-8">
      <div className="text-left  ">
        <a href="#" className="text-xl text-white font-semibold flex items-center  ">
          Series <MdOutlineDoubleArrow className="mt-[5px] ml-[5px]" />
        </a>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {series.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-35 rounded-t-md"
              />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 rounded-full">
                  <img
                    src={items.authorLogo}
                    className="w-full h-full rounded-full"
                    alt={items.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-white">
                    {items.authorName}
                  </span>
                  <span className="block text-white text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-white">{items.title}</h3>
                <p className="text-gray-400 text-sm mt-1">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
      <a href="#" className="text-2xl text-white font-semibold flex mt-[20px] items-center">
          Latest <MdOutlineDoubleArrow className="mt-[5px] ml-[5px]" />
        </a>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4 ">
        {latest.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-35 rounded-t-md"
              />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 h-10 rounded-full">
                  <img
                    src={items.authorLogo}
                    className="w-full h-full rounded-full"
                    alt={items.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-white">
                    {items.authorName}
                  </span>
                  <span className="block text-white text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-white">{items.title}</h3>
                <p className="text-white text-sm mt-1">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
      <a href="#" className="text-2xl text-white font-semibold flex mt-[20px] items-center ">
          Films <MdOutlineDoubleArrow className="mt-[5px] ml-[5px]" />
        </a>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {movies.map((items, key) => (
          <article
            className="max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm"
            key={key}
          >
            <a href={items.href}>
              <img
                src={items.img}
                loading="lazy"
                alt={items.title}
                className="w-full h-35 rounded-t-md"
              />
              <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
                <div className="flex-none w-10 h-10 rounded-full">
                  <img
                    src={items.authorLogo}
                    className="w-full h-full rounded-full"
                    alt={items.authorName}
                  />
                </div>
                <div className="ml-3">
                  <span className="block text-white">
                    {items.authorName}
                  </span>
                  <span className="block text-white text-sm">
                    {items.date}
                  </span>
                </div>
              </div>
              <div className="pt-3 ml-4 mr-2 mb-3">
                <h3 className="text-xl text-white">{items.title}</h3>
                <p className="text-white text-sm mt-1">{items.desc}</p>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
