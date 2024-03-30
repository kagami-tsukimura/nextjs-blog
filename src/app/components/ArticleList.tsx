import Image from "next/image";
import Link from "next/link";
const ArticleList = () => {
  return (
    <div>
      <article>
        <Link href='#'>
          <Image
            src='https://source.unsplash.com/collection/1346951/1000x500?sig=1'
            alt=''
            height={300}
            width={1280}
          ></Image>
        </Link>
        <div>
          <a href='#'>Technology</a>
          <a href='#'>Next.js</a>
          <p>By Kagami, Published on 2024/04/01</p>
          <Link href='#'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            reprehenderit beatae id debitis magni, inventore temporibus
            explicabo omnis fuga veritatis officia? Ex debitis, iste deleniti
            consectetur sequi magnam ducimus veniam?
          </Link>
          <Link href='#'>More...</Link>
        </div>
      </article>
    </div>
  );
};

export default ArticleList;
