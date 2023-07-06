export default async function handler(req, res) {
    console.log('........ Revalidating - ', req.query.page);

    let revalidated = false;

    try {
        await res.revalidate(`/${req.query.page}`);
        revalidated = true;
        console.log('........ Revalidated -', req.query.page);
    } catch (e) {
      console.error('Error while revalidating - ' + req.query.page, e);
    }

    res.json({ revalidated });
}