/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol:'https',
                hostname:'www.jhoniipia.com'
            },
            {
                protocol:'https',
                hostname:'pokeapi.co'
            }
        ]
    }
};

export default nextConfig;
