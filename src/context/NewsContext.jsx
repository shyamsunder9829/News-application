import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import api from "../config/axios";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchNews = async (url = "/everything?q=india") => {
    setLoading(true);
    try {
      const response = await api.get(
        `${url}&apiKey=${import.meta.env.VITE_API_KEY}`,
      );
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchTopHeadlines = async (options = {}) => {
    setLoading(true);
    try {
      let url = "/top-headlines?";
      
      if (options.country) {
        url += `country=${options.country}`;
      }
      if (options.category) {
        url += `${url.endsWith("?") ? "" : "&"}category=${options.category}`;
      }
      if (options.sources) {
        url += `${url.endsWith("?") ? "" : "&"}sources=${options.sources}`;
      }
      if (options.q) {
        url += `${url.endsWith("?") ? "" : "&"}q=${options.q}`;
      }
      
      url += `&apiKey=${import.meta.env.VITE_API_KEY}`;
      
      const response = await api.get(url);
      setLoading(false);
      return response.data;
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const value = {
    news,
    setNews,
    fetchNews,
    fetchTopHeadlines,
    loading
  };




  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
