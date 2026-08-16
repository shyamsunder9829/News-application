import React, { useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Navbar = ({ className }) => {
  const { setNews, fetchNews, fetchTopHeadlines } = useNewsContext();
  const [selectedSource, setSelectedSource] = useState("bbc-news");

  const sources = ["bbc-news", "cnn", "bbc-sport", "espn"];

  let timer;
  const searchNews = (e) => {
    const searchValue = e.target.value;
    if (!searchValue) return;

    clearTimeout(timer);

    timer = setTimeout(async () => {
      const data = await fetchNews(`/everything?q=${searchValue}`);
      setNews(data.articles);
    }, 1500);
  }

  const handleSourceChange = (source) => {
    setSelectedSource(source);
  };

  return (
    <div className={`bg-base-200 ${className}`}>
      <Wrapper>
        <div className="navbar shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">News App</a>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search"
              className="input w-24 md:w-auto"
              onChange={searchNews}
            />
            <div className="dropdown dropdown-end">
              <button className="btn btn-ghost btn-circle" tabIndex="0">
                <div className="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {" "}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />{" "}
                  </svg>
                  <span className="badge badge-xs badge-primary indicator-item"></span>
                </div>
              </button>
              <ul tabIndex="0" className="dropdown-content menu bg-base-100 rounded-box w-52 p-2 shadow">
                {sources.map((source) => (
                  <li key={source}>
                    <a onClick={async () => {
                      handleSourceChange(source);
                      const data = await fetchTopHeadlines({ sources: source });
                      if (data && data.articles) {
                        setNews(data.articles);
                      }
                    }} className={selectedSource === source ? "active" : ""}>
                      {source}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
