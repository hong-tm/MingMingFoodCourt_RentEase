export class SendFetch {
    public async sendPost(url: string, data: URLSearchParams, headers: Headers) {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: data
        });
        return response;
    }
}