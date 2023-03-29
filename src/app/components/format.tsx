import Header from './header';
import Footer from './footer';
import Head from "next/head";

export default function format({children}) {
    return (
        <>
            <Head>
                <title>Teste</title>
            </Head>
            <Header />
            <main className='h-screen'>
                {children}
            </main>
            <Footer />
        </>
    );
}