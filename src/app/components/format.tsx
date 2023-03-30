import Header from './header';
import Footer from './Footer/footer';
import Head from "next/head";
import '../../app/globals.css'

export default function format({children}) {
    return (
        <>
            <Head>
                <link rel="shortcut icon" href="/images/favicon.png" type="image/x-icon" />
                <title>Fruki</title>
            </Head>
            <Header />
            <main className='min-h-full w-full'>
                {children}
            </main>
            <Footer />
        </>
    );
}