import { Metadata } from 'next';

type Props = {
  params: Promise<{ blogId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).blogId;
  const title: string = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 100)
  });
  return {
    title: `${title.split('%20').join(' ')} | Blog | Jonathan Warner - Software Engineer`,
  };
};

export default async function BlogDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const blogId = (await params).blogId;
  return (
    <section className='py-24'>
      <div className="container">
        <h1 className="text-3xl font-bold">
          {blogId.split('%20').join(' ')}
        </h1>
      </div>
    </section>
  )
}
