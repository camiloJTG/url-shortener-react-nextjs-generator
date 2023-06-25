const Hero = () => {
   return (
      <>
         <h1 className='my-4 text-3xl md:text-5xl text-white opacity-75 font-bold leading-tight text-center md:text-left'>
            <span className='bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-pink-500 to-purple-500'>
               Free{'  '}
            </span>
            URL Shortener
         </h1>
         <p className='leading-normal text-base md:text-2xl mb-8 text-center md:text-left'>
            Free, fast and secure tool to shorten a URL or reduce a link.
         </p>
      </>
   );
};

export default Hero;
