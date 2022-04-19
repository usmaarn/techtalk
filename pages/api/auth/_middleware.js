
export default function handler(req, event){
    if (req.url.includes('/api/auth/signin')){
        return new Response('', {
            status: 302,
            headers: {Location: '/auth/login'}
        })
    }
}