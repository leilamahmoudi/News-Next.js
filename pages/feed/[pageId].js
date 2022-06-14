export const Feed = ({ pageNumber, articles }) => {
  console.log("HEREEEEE", pageNumber, articles);
  return (
    <div className={styles.main}>
      {articles.map((article, index) => {
        <div key={index} className={styles.post}></div>;
      })}
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  let pageNumber = pageContext.query.pageId;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/everything?q=US&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
export default Feed;
