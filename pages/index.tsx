import { GetServerSideProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home({ records, episodes }) {
  return (
    <div>
      <Head>
        <title>{records[0].fields.name} - podcast</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-1/2 m-auto">
      {records.map((record) => (
        <div key={record.id}>
          <h1 className="text-4xl p-4">
            {record.fields.name}
          </h1>
          <p className="p-4">
            {record.fields.description}
          </p>
          <div>
            <ul className=" flex flex-row self-center">
              <li className="p-4">
                <h2>Follow us on</h2>
              </li>
              <li className="p-4"> 
                <Link href={record.fields.twitter}>
                  <a>
                    <Image
                      src="/twitter.png"
                      alt="Picture of the author"
                      width={30}
                      height={30}>
                  </Image>
                  </a>
                </Link>
              </li>
              <li className="p-4">
                <Link href={record.fields.linkedin}>
                  <a>
                    <Image
                      src="/linkedin.png"
                      alt="Picture of the author"
                      width={30}
                      height={30}>
                    </Image>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>))}

        {episodes.map((episode) => (
        <div key={episode.id}>
          <h1 className="text-2xl p-4">
            {episode.fields.episode_name}
          </h1>
          <p className="p-4">
            {episode.fields.short_description}
          </p>
         <div className="p-4">
         <button className="bg-indigo-400 hover:bg-indigo-600 p-2">
            <Link href={{
                        pathname: '/episode/[id]',
                        query: { id: episode.fields.slug },
                    }}>
              Listen
            </Link>
          </button>
         </div>
        </div>))}
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let headers = new Headers();
  headers.append("Authorization", "Bearer " + process.env.AIRTABLE_API);
  let records: any[];
  records = [];
  
  let responseRecords = 
  await fetch('https://api.airtable.com/v0/appN0b1jz6irTGYdC/Publication ', {
    method: 'GET',
    headers: headers
  });
  records = await responseRecords.json();

  let episodes: any[]
  episodes = [];

  let episodesResponse = 
  await fetch('https://api.airtable.com/v0/appN0b1jz6irTGYdC/Episodes ', {
    method: 'GET',
    headers: headers
  });
  episodes = await episodesResponse.json();

return { props: 
    { records: records.records,
      episodes: episodes.records,
    } 
  }
}