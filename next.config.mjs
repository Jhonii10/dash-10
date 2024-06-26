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
            },
            {
                protocol:'https',
                hostname:'raw.githubusercontent.com'
            }
            
        ]
    }
};

export default nextConfig;
