import EleventyFetch from '@11ty/eleventy-fetch';

const data = await EleventyFetch('https://gitconnected.com/v1/portfolio/pinnheads', {
    duration: '4w',
    directory: './tmp/.cache',
    type: 'json',
});

export default data;
