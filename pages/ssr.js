import Page from '../Page';
import { getRandomAPI } from '../publicApis';

export default Page;

export async function getServerSideProps() {
    console.log(`---------- Get Server Side Props for (SSR) ---------- `);

    const props = await getRandomAPI('SSR');

    console.log(`---------- Recieved Props for (SSR) `, props);
    
    return { props };
}