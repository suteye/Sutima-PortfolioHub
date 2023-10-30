export default function Page({ params }: { params: { workId: string } }) {
  console.log(params.workId)
    return <div>My Work: {params.workId}</div>
  }

  
export async function getStaticPaths() {
  // Fetch a list of dynamic paths from your data source.
  const workIds = ['1', '2', '3']; // Replace with your actual work IDs

  // Map the work IDs to an array of objects with `params` key.
  const paths = workIds.map((workId) => ({
    params: { workId },
  }));

  return {
    paths,
    fallback: false, // You can set this to 'true' or 'blocking' if you want to handle paths not defined in `workIds`.
  };
}