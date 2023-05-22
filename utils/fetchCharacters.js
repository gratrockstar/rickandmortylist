import { API_URL } from './constants';

export const fetchCharacters = async (page) => {

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: `
      query CharacterQuery($page: Int) {
        characters(page: $page) {
          results {
            gender
            id
            image
            name
            species
            status
            type
          }
          info {
            count
            next
            pages
            prev
          }
        }
      }
      `, 
      variables: {
        page: page
      }
    }),
  };
  const response = await fetch(API_URL, options);
  const data = await response.json();

  return data;

}