import { GetServerSideProps } from 'next';
import Link from 'next/link';

export default function Hubs({ records }) {
  return (

    <div>
      <h1>Community Weekly</h1>
      <div>
        {records.map((record) => (
          <div key={record.id}>
            <h2>
              {record.fields.name}
            </h2>
            <p>
              {record.fields.short_description}
            </p>
            <button className="bg-indigo-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              <Link href={`/hub/[id]`} as={`/hub/${record.fields.slug}`}>
                Read profile
      </Link>
            </button>
          </div>))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let headers = new Headers();
  headers.append("Authorization", "Bearer " + process.env.AIRTABLE_API);
  let records = []
  let response =
    await fetch('https://api.airtable.com/v0/appN0b1jz6irTGYdC/Founders', {
      method: 'GET',
      headers: headers
    });
  let posts = await response.json();
  records = posts.records;
  return { props: { records } }
}