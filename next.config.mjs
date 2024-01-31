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
  
  
  export { generateStaticParams, serverOptions };