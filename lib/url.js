const imageUrl = "https://image.tmdb.org/t/p/w500";

export function getImageUrl( id ) {
    return `${ imageUrl }${ id }`;
}

export function getHeaders() {
    const headers = {
        "Authorization": `Bearer ${ process.env.TMDB_API_KEY }`,
        "Content-Type": "application/json;charset=utf-8"
    }
    return headers
}
