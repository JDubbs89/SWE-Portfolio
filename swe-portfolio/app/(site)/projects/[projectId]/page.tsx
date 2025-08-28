export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const projectId = (await params).projectId;
  return (
    <section className='py-24'>
      <div className="container">
        <h1 className="text-3xl font-bold">
          Project {projectId} Post Page
        </h1>
      </div>
    </section>
  )
}