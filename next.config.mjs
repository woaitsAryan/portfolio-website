/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects(){
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source : '/resume',
        destination : '/resume.pdf',
        permanent : true
      }
    ]
  },
  reactStrictMode: true,
};
 
 
export default nextConfig