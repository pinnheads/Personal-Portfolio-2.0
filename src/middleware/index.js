import EleventyFetch from '@11ty/eleventy-fetch';

const getData = async () => {
    const url = 'https://gitconnected.com/v1/portfolio/pinnheads';
    const data = EleventyFetch(url, {
        duration: '4w',
        type: 'json',
    });
    return data;
};

export async function onRequest({ locals, request }, next) {
    const response = await getData();
    if (request.url.includes('/work')) {
        locals.data = response.work;
    } else if (request.url.includes('/project')) {
        locals.data = response.projects;
    } else {
        locals.data = response.basics;
    }
    return next();
}
