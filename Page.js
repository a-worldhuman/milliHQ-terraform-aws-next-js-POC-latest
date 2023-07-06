import { useRouter } from 'next/router';

export default function Page(props) {
    const { isFallback } = useRouter();

    if (isFallback) {
        console.log('----------- Fallback', props)
        return <>Fallback Page.......</>;
    }

    console.log('----------- Page', props)

    return <div>
        <h1>ISR Demo</h1>
        <h2>{props.name}</h2>
        <p>{props.description}</p>
    </div>
}