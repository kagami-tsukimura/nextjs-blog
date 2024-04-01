import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ArticleCardProps = {
  article: Article;
};

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article className='shadow my-4 flex flex-col' key={article.id}>
      <Link href={`articles/${article.id}`} className='hover:opacity-75'>
        <Image
          src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
          alt=''
          height={300}
          width={1280}
        ></Image>
      </Link>
      <div className='bg-white flex flex-col justify-start p-6'>
        <Link
          href={`articles/${article.id}`}
          className='text-blue-700 pb-4 font-bold'
        >
          {article.id}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'
        >
          {article.title}
        </Link>

        <p className='text-sm pb-3 text-slate-900'>
          By Kagami, Published on{" "}
          {new Date(article.createdAt).toLocaleDateString()}
        </p>
        <Link href={`articles/${article.id}`} className='pb-6 text-slate-900'>
          {article.content.length > 70
            ? `${article.content.substring(0, 70)}...`
            : article.content}
        </Link>
        <Link
          href={`articles/${article.id}`}
          className='text-pink-800 hover:text-black'
        >
          More...
        </Link>
      </div>
    </article>
  );
};

export default ArticleCard;
