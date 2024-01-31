const generateStaticParams = async () => {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  };
  
  const serverOptions = {
    server: {
      port: 3001, // Specify the desired port number
    },
  };

  /** @type {import('next').NextConfig} */
const nextConfig = {
    output:'export',
  };
  
  
  /* module.exports = nextConfig*/
  export { generateStaticParams, serverOptions, nextConfig };