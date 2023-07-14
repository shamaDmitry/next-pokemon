const Page = ({ params }) => {
  console.log(params);

  return (
    <div>
      {JSON.stringify(params)}
    </div>
  );
}

export default Page;
