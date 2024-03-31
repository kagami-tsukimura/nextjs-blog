import Image from "next/image";

const Article = ({ params }: { params: { id: string } }) => {
  return (
    <div className='max-w-3xl mx-auto p-5'>
      <Image
        src={`https://source.unsplash.com/collection/1346951/1000x500?sig=${params.id}`}
        alt=''
        height={300}
        width={1280}
      ></Image>
      {params.id}
      <h1 className='text-4xl text-center mb-10 mt-10'>タイトル</h1>
      <div className='text-lg leading-relaxed text-justify'>
        <p>本文</p>
      </div>
    </div>
  );
};

export default Article;
