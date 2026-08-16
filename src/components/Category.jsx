import React from "react";
import Wrapper from "../components/Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({ className }) => {
  const { setNews, fetchNews } = useNewsContext();

  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleCategoryClick = async (e) => {
    const cat = e.target.value;
    const data = await fetchNews(`/everything?q=${cat}`);
    setNews(data.articles);
  };

  return (
    <div className={`${className}`}>
      <Wrapper>
        <div
          className={`scrollbar-none flex gap-3.5 px-5 max-w-full w-fit overflow-x-auto m-auto `}
        >
          {categories.map((category) => {
            return (
              <button
                key={category}
                className="btn btn-active btn-primary"
                value={category}
                onClick={handleCategoryClick}
              >
                {category}
              </button>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
