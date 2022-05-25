import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>VanillaCraft | Home</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    property="og:description"
                    content="VanillaCraft, one of the largest Factions servers on Eaglercraft. Join today!"
                />
                <meta
                    property="twitter:description"
                    content="VanillaCraft, one of the largest Factions servers on Eaglercraft. Join today!"
                />
                <meta property="theme-color" content="#46E393" />
                <meta property="og:title" content="VanillaCraft | Home" />
                <meta property="og:type" content="website" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <div className={styles.container}></div>
        </>
    );
}
