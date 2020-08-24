function conditionSlug(slug) {
  switch (slug) {
    case 'storm':
      return { linear: '#0d2d45', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'snow':
      return { linear: '#5681BA', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'hail':
      return { linear: '#424454', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'rain':
      return { linear: '#0d2d45', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'fog':
      return { linear: '#424454', gradient: '#FFF', primaryColor: '#fff' };
    case 'clear_day':
      return { linear: '#7c5c6b', gradient: '#EAFAE0', primaryColor: '#fff' };
    case 'clear_night':
      return { linear: '#153157', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'cloud':
      return { linear: '#00467F', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'cloudly_day':
      return { linear: '#00467F', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'cloudly_night':
      return { linear: '#08364F', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'none_day':
      return { linear: '#A9C9FF', gradient: '#D1E8E9', primaryColor: '#fff' };
    case 'none_night':
      return { linear: '#153157', gradient: '#D1E8E9', primaryColor: '#fff' };
    default:
      return { linear: '#7c5c6b', gradient: '#EAFAE0', primaryColor: '#fff' };
  }
}

export default conditionSlug;
