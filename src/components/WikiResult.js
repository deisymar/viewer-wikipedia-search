import DOMPurify from "dompurify";

const WikiResult = ({ results, isRandom }) => {
  return (
    <div className="results">
      {results.map((result, i) => {
        let urlPage = "";
        if (!isRandom) {
          urlPage = `https://en.wikipedia.org/?curid=${result.pageid}`;
        } else {
          urlPage = `https://en.wikipedia.org/?curid=${result.id}`;
        }
        return (
          <div className="result" key={i}>
            <h3>{result.title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(result.snippet)
              }}
            ></p>
            <a href={urlPage} target="_blank" rel="noreferrer">
              Read More
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default WikiResult;
