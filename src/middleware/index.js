import EleventyFetch from "@11ty/eleventy-fetch";

export async function onRequest({locals, request}, next) {
    let url = "https://gitconnected.com/v1/portfolio/pinnheads";

    /* This returns a promise */
    const data = await EleventyFetch(url, {
            duration: "4w", // save for 1 day
            directory: 'dist/cache',
            type: "json"    // we’ll parse JSON for you
        });
    locals.profileData = data;

    return next();
};