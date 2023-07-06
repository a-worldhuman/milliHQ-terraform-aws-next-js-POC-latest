import Page from '../Page';
import { getRandomAPI } from '../publicApis';

export default Page;

export async function getStaticProps() {
    console.log(`---------- Get Static Props for (ISR) ---------- `);

    const props = await getRandomAPI('ISR');

    console.log(`---------- Recieved Props for (ISR) `, props);

    return {
        props,
        revalidate: 30
    };
}