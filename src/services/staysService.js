import stays from '../data/stays.json';

export const filterStaysByCity = (city) => {
  return stays.filter((stay) => stay.city === city)
}