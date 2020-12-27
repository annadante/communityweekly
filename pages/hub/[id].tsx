import { GetServerSideProps } from "next";

export default function Hub ({ records }) {

    return(
        

<div>
  <h1 className="font-bold">Community Weekly</h1>
  <div>
  {records.map((record) => (
    <div key={record.id}>
        
      <h2>
        Company name
      </h2>
      <p>
          {record.fields.company}
      </p>
    <h2>
        Founder
    </h2>
    <p>
        {record.fields.name}
    </p>
    <h2>
        Website
    </h2>
    <p>
        
            {record.fields.website}

    </p>
    </div>))}
  </div>
</div>
    )

}




export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
    let headers = new Headers();
    headers.append("Authorization", "Bearer keywXmMgafGDbZfOf");
    let records = []
    let response = 
    await fetch(`https://api.airtable.com/v0/appN0b1jz6irTGYdC/Founders?filterByFormula=SEARCH(\"${ctx.query.id}\",{slug})`, {
      method: 'GET',
      headers: headers
    });
    let posts = await response.json();
    records = posts.records;
  return { props: { records } }
  }