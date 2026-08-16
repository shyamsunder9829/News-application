import { useEffect } from "react";
import Wrapper from "../components/Wrapper";
import { useNewsContext } from "../context/NewsContext";
import Loader from "../components/Loader";

const News = ({ className }) => {
  const { news, setNews, fetchNews, loading } = useNewsContext();

  //load data on initail render
  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data.articles);
    })();
  }, []);

  if (loading) return (<Wrapper>
     <div className="grid grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[640px]:grid-cols-1 px-5 gap-6">
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
    <Loader />
  </div>
  </Wrapper>)

  return (
    <Wrapper>
      <div className={`grid grid-cols-4 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[640px]:grid-cols-1 px-5 gap-6 ${className}`}>
        {news.map((newsDetails, index) => {
          if (!newsDetails.urlToImage) return null;

          return (<NewsCard key={index} details={newsDetails} />);
        })}
      </div>
    </Wrapper>
  );
};

const NewsCard = ({ details }) => {
  const handleImageError = (e) => {
    e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23333' width='400' height='300'/%3E%3Ctext x='50%' y='50%' fill='%23999' text-anchor='middle' dy='.3em' font-family='Arial' font-size='18'%3EImage Not Available%3C/text%3E%3C/svg%3E";
  };

  return (
    <div className="card bg-base-200  shadow-sm">
      <figure className="w-full h-55 min-[425px]:h-80 min-[505px]:h-90 sm:h-48 md:h-52 lg:h-45  overflow-hidden bg-base-300">
        <img
          className="w-full h-full object-fill"
          src={details?.urlToImage}
          onError={handleImageError}
          alt="News banner"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title line-clamp-2 text-md sm:text-lg md:text-2xl">{details?.title}</h2>
        <p className="line-clamp-3 text-sm sm:text-md">{details?.description}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => window.open(details.url)}
            className="btn badge-outline p-4 mt-4 rounded-2xl"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
