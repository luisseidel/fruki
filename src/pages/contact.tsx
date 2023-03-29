import Link from 'next/link';
import { useRouter } from 'next/router';
import Format from "../app/components/format";

export default function Contact() {
    const router = useRouter();
    const {likes} = router.query;

    return (
        <Format>
            <h1>CONTACT PAGE - {likes}</h1>
            <Link href="/">
                Home
            </Link>
        </Format>
    );
}