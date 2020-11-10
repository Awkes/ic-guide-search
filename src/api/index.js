const API_URL = process.env.REACT_APP_API_URL;

async function client(endpoint) {
  const res = await fetch(`${API_URL}/${endpoint}`);
  const data = await res.json();
  return data;
}

const guideSearch = (query) => client('guidesearch'+query);
const guideSuggest = (query) => client('suggest'+query);

export { guideSearch, guideSuggest }
