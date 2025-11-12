import Image from "next/image";
import { getPageData, getArticlesData } from "./components/lib/contentstack";

export default async function Home() {
  /** contentstackからフェッチ */
  const page = await getPageData();
  const banner = page?.sections[0]?.home_banner?.banner[0];

  const articles = await getArticlesData();
  console.log(articles);

  type itemProps = {
    uid: string;
    title: string;
    one_linear: string;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {banner.url && (
          <Image src={banner.url} alt="" width={745} height={419} />
        )}

        <div>
          {articles.map((item: itemProps) => (
            <div key={item.uid}>
              <h2>{item.title}</h2>
              <p>{item.one_linear}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
