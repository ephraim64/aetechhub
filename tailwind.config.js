tailwind.config = {
      theme:{
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }, 

      fontFamily: {
        Montserrat: [ "Montserrat", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"]
      }, 

      color: {
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001f'
      }, 

      boxShadow: {
        'black' : '4px_4px_0_#000',
        'white' : '4px_4px_0_#fff'
      }
    }, darkMode : 'selector'
  
  
}