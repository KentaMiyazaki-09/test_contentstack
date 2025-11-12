import Image from "next/image";
import { getPageData, getArticlesData } from "./components/lib/contentstack";

export default async function Home() {
  /** contentstackからフェッチ */
  const page = await getPageData();
  const banner = page?.sections[0]?.home_banner?.banner[0];

  const articles = await getArticlesData();
  console.log(articles);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        {banner.url && (
          <Image src={banner.url} alt="" width={745} height={419} />
        )}

        {}
      </main>
    </div>
  );
}
