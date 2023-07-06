import Page from '../Page';
import { getRandomAPI } from '../publicApis';

export default Page;

export async function getStaticProps() {
    console.log(`---------- Get Static Props for (SSG) ---------- `);

    const props = await getRandomAPI('SSG');

    console.log(`---------- Recieved Props for (SSG) `, props);

    return { props };
}