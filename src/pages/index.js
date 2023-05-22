import Link from 'next/link';
import { fetchCharacters } from '../../utils/fetchCharacters';
import React, {useState} from 'react';
import { Dna } from "react-loader-spinner";
import CharacterList from '../../components/CharacterList/CharacterList';
import Pagination from '../../components/Pagination/Pagination';

// @todo: pass pagination a function to use instead of data since we're not actually 
//        loading a new URL, just fetching data
// @todo: pass in prev/next to pagination from fetched data
// @todo: show loading component with simple spinner when loading
export default function Index(props) {
  const {data, info} = props;
  const [fetchedData, setFetchedData] = useState(data);
  const [characters, setCharacters] = useState(data.characters?.results);
  const [isLoading, setIsLoading] = useState(false);

  const loadNewPage = (page) => {
    setIsLoading(true);

    const newData = fetchCharacters(page).then((newData) => {
      const {results, info} = newData.data?.characters;
      setFetchedData(newData.data);
      setCharacters(results);
      setIsLoading(false);
    });

  }

  return (
    <>
    {isLoading === true ? (
      <div className="loading">
        <Dna
          visible={true}
          height="80"
          width="80"
          ariaLabel="dna-loading"
          wrapperStyle={{}}
          wrapperClass="dna-wrapper"
        />
      </div> ) : (
      <>
        <CharacterList characters={characters} />
        <Pagination info={fetchedData.characters.info} loadNewPage={loadNewPage} />
      </>
    )}
    </>
  );

}

// @todo: Move query into separate function
// @todo: pass query and variables into function
// @todo: always use page param
// @todo: use State and pass data into characterlist
// @todo: handle pagination
// @todo: refetch when pagination link is clicked
// @todo: set characters in State
export async function getStaticProps() {

  const data = await fetchCharacters();

  return {
    props: {
      data: data.data
    }
  }

}