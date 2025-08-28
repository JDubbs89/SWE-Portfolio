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
          Blog {blogId} Post Page
        </h1>
      </div>
    </section>
  )
}
