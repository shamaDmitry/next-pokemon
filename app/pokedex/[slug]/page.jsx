import Link from 'next/link';

const Page = ({ params, searchParams }) => {
  return (
    <div className="">
      <div>
        <Link href="/pokedex">
          go back
        </Link>
      </div>

      ASIDE POKEMON {params.slug}
    </div>
  );
}

export default Page;
