import type { APIRoute } from 'astro'

export const post: APIRoute = async (context) => {
    const body = await context.request.json()

    const { token } = body

    const response = await fetch(`${import.meta.env.API_URL}/api/gpt/paynotice`, {
        headers: {
            'Content-Type': 'application/json',
            'Token': token,
            'Appkey': import.meta.env.APP_KEY,
        },
        method: 'post',
        body: JSON.stringify({
            app_key: import.meta.env.APP_KEY,
        }),
    })
    const text = await response.text();
    return new Response(text)
}
