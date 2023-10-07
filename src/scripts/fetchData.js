import EleventyFetch from '@11ty/eleventy-fetch';

export default async function fetchData() {
    let url = 'https://gitconnected.com/v1/portfolio/pinnheads';

    /* This returns a promise */
    return EleventyFetch(url, {
        duration: '4w', // save for 1 day
        type: 'json', // we’ll parse JSON for you
    });
}
