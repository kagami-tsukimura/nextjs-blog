import { getDetailArticle } from "@/blogApi";
import Image from "next/image";

const Article = async ({ params }: { params: { id: string } }) => {
  const detail = await getDetailArticle(params.id);

  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${detail.id}`}
        alt=''
        height={300}
        width={1280}
      ></Image>
      {params.id}
      <h1 className='text-4xl text-center mb-10 mt-10'>{detail.title}</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>{detail.content}</p>
      </div>
    </div>
  );
};

export default Article;
