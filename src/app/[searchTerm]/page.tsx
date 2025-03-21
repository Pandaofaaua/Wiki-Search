import getWikiResult from "../../../lib/getWikiResult";
import Items from "./components/Items";

interface Props {
  params: Promise<{
    searchTerm: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function Page({ params }: Props) {
  const { searchTerm } = await params;
  const decodedTerm = decodeURIComponent(searchTerm);
  const wikiData: Promise<SearchResult> = getWikiResult(searchTerm);
  const data = await wikiData;
  const results: Result[] | undefined = data?.query?.pages;

  return (
    <main className="md:py-2 bg-slate-200 dark:bg-black text-black dark:text-white w-full min-h-[calc(100vh-148px)] md:min-h-[calc(100vh-76px)] flex flex-col">
      <div className="flex-1 p-1 md:p-4">
        {decodedTerm === "welcome" ? (
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-130px)] md:min-h-[calc(100vh-180px)]">
            <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4 text-center px-4">
              Welcome to Wiki-Search
            </h1>
            <p className="text-lg md:text-xl italic text-gray-600 dark:text-gray-400 text-center px-4">
              Enter a search term above to begin exploring Wiki-Search!
            </p>
          </div>
        ) : results ? (
          <>
            {Object.values(results).map((result) => {
              return <Items key={result.pageid} results={result} />;
            })}
          </>
        ) : (
          <h2 className="p-2 text-lg md:text-xl font-bold text-center">
            {`${searchTerm} Not Found!`}
          </h2>
        )}
      </div>
      <footer className="w-full text-center italic underline -mt-6 md:-mt-0 md:py-4 text-xs md:text-sm text-black bg-slate-200 dark:bg-black dark:text-gray-300">
        © {new Date().getFullYear()} Wiki-Search Created by LOSEYI. Data from
        Wikipedia.org
      </footer>
    </main>
  );
}
