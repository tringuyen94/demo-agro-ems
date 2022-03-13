const getType = (typeRoute) => {
   switch (typeRoute) {
      case 'chi-so-dien':
         return 'electric'
      case 'chi-so-nuoc':
         return 'water'
      default:
         break;
   }
}

export default getType
