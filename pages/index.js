import Head from "next/head";
import Link from "next/link";
import cuid from "cuid";
import data from "../data";
export default function Home() {
  console.log(Object.values(data));

  return (
    <div className="main_bg">
      <Head>
        <title>Kmea Photo Gallery</title>
        <meta name="description" content="kade photos" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        {Object.values(data).map((user_data) => {
          return (
            <div key={cuid()}>
              <Link href={`/${user_data.fname}`}>
                <a>
                  <div className="Main_Page">
                    <img src={`/${user_data.fname}/1.jpg`} alt={`${user_data.fname} ${user_data.lname}`} />
                  </div>
                  <div className="Name_main">
                    <h3>{`${user_data.fname} ${user_data.lname}`}</h3>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
