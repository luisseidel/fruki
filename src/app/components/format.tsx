import Header from './header';
import Footer from './Footer/footer';
import Head from "next/head";
import '../../app/globals.css'

export default function format({children}) {
    return (
        <>
            <Head>
                <title>Teste</title>
            </Head>
            <Header />
            <main className='min-h-full w-full flex justify-center'>
                <div className='container'>
                    {children}
                </div>
            </main>
            <Footer />
        </>
    );
}