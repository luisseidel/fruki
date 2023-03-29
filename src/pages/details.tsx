import Link from 'next/link';
import { useRouter } from 'next/router'
import Format from '../app/components/format'

export default function Details() {
    const router = useRouter();
    const { nome } = router.query;

    return (
        <Format>
            <h1>DETAILS PAGE - {nome}</h1>
            <Link href="/">
                Home
            </Link>
        </Format>
    );
}