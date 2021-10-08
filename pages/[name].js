import Head from 'next/head';
import data from '../data'
import { useRouter } from 'next/router';
import cuid from 'cuid';
import { useEffect, useState } from 'react';
import Link from 'next/link';
export default function Main() {
    const router = useRouter();
    const [name, setName] = useState(router.query.name);
    useEffect(() => {
        setName(router.query.name);
    }, [router.query.name])
    const [pic, setPic] = useState([])
    const [picPhone, setPicPhone] = useState([])
    let NumberOfPhotos = 0;
    NumberOfPhotos = data[`${name}`]?.NumberOfPhotos;
    useEffect(() => {
        let items = [];
        let itemsPhone = [];
        for (let i = 3; i <= NumberOfPhotos; i++) {
            items.push(
                <img key={cuid()} src={`/${name}/${i}.jpg`} alt={`${name} images ${i}`} />
            )
        }
        for (let i = 1; i <= NumberOfPhotos; i++) {
            itemsPhone.push(
                <img key={cuid()} src={`/${name}/${i}.jpg`} alt={`${name} images ${i}`} />
            )
        }
        setPic(items)
        setPicPhone(itemsPhone)
    }, [NumberOfPhotos])
    return (
        <>

            <Head>
                <title>{name}</title>
                <meta name="description" content={`Photo of ${name}`} />
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
                        rel="stylesheet" />
            </Head>
            <Link href="/">
                <a>
                    <button className="back_button"><img src="/back.png" alt="Back" /></button>
                </a>
            </Link>
            <div className="images desktop">
                <div className="images_left">
                    <div className="name">
                        <h1>{data[name]?.fname} {data[name]?.lname}</h1>
                        <p>Dept of  {data[name]?.dept}</p>
                    </div>
                    <img src={`/${name}/1.jpg`} alt={`${name} image 1`} className="image_name_1" />
                </div>
                <img src={`/${name}/2.jpg`} alt={`${name} image 1`} className="image_name_1" />

            </div>
            <div className="pics desktop">
                {pic}
            </div>

            <div className="mobile">
                <div className="name">
                    <h1>{data[name]?.fname} {data[name]?.lname}</h1>
                    <p>Dept of  {data[name]?.dept}</p>
                </div>
                <div className="photo">
                    {picPhone}
                </div>
            </div>
        </>

    )
}
