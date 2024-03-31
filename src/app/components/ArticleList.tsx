import { Article } from "@/types";
import Image from "next/image";
import Link from "next/link";

type ArticleListProps = {
  articles: Article[];
};

const ArticleList = ({ articles }: ArticleListProps) => {
  return (
    <div>
      {articles.map((article) => (
        <article className='shadow my-4 flex flex-col' key={article.id}>
          <Link href='#' className='hover:opacity-75'>
            <Image
              src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${article.id}`}
              alt=''
              height={300}
              width={1280}
            ></Image>
          </Link>
          <div className='bg-white flex flex-col justify-start p-6'>
            <a href='#' className='text-blue-700 pb-4 font-bold'>
              {article.title}
            </a>
            <a
              href='#'
              className='text-slate-900 text-3xl font-bold hover:text-gray-700 pb-4'
            >
              {article.content}
            </a>
            <p className='text-sm pb-3 text-slate-900'>
              By Kagami, Published on {article.createdAt}
            </p>
            <Link href='#' className='text-slate-900 pb-6'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              reprehenderit beatae id debitis magni, inventore temporibus
              explicabo omnis fuga veritatis officia? Ex debitis, iste deleniti
              consectetur sequi magnam ducimus veniam?
            </Link>
            <Link href='#' className='text-pink-800 hover:text-black'>
              More...
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ArticleList;
