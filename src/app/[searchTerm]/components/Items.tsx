import Link from "next/link";

type Props = {
  results: Result;
};

const Items = ({ results }: Props) => {
  const ItemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${results.pageid}`}
          target="_blank"
          className="text-xl font-bold text-blue-500 underline md:text-xl lg:text-2xl"
        >
          {results.title}
        </Link>
      </h2>
      <p className="my-2 text-base md:text-lg lg:text-xl ">{results.extract}</p>
    </div>
  );

  const content = results?.thumbnail?.source ? (
    <article className="m-4">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <img
            src={results.thumbnail.source}
            alt={results.title}
            width={results.thumbnail.width}
            height={results.thumbnail.height}
            loading="lazy"
          />
        </div>
        {ItemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4">{ItemTextCol}</article>
  );

  return content;
};
export default Items;
