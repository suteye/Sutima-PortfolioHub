export default function Page({ params }: { params: { workId: string } }) {
  console.log(params.workId)
    return <div>My Work: {params.workId}</div>
  }
  