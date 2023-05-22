import Image from 'next/image';
import Link from 'next/link';
import { fetchCharacter } from 'utils/fetchCharacter';
import styles from './characters.module.scss';
//import React, {useState} from 'react';

export default function Character(props) {

  const { character } = props.character.data;

  console.log(character);

return (
  <>
    <div className={styles.backlink}>
      <Link className={styles.backlinkitem} href="/">Back to List</Link>
    </div>
    <div className={styles[`character-detail`]}>
      <div className="thumbnail">
      <Image
        src={character.image}
        width='300'
        height='300'
        alt={character.name}
        priority='true'
      />
      </div>
      <div className="content">
        <h1>Name: {character.name}</h1>
        <p>{character.species}, {character.gender}</p>
        {character.location?.name && <p>Location: {character.location.name}</p>}
        {character.origin?.name && <p>Origin: {character.origin.name}</p>}
        <p>Status: {character.status}</p>
        {character.episode.length ? (
          <div className={styles.episodes}>
            <h2>Episodes:</h2>
            <ul>
            {character.episode.map((episode,index) => (
              <li key={index} className={styles.episode}>{episode.episode} | {episode.name}<br />Airdate: {episode.air_date}</li>
            ))}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
    <div className={styles.backlink}>
      <Link className={styles.backlinkitem} href="/">Back to List</Link>
    </div>
  </>
);

}

export async function getServerSideProps(ctx) {

  console.log(ctx.params?.id);

  const data = await fetchCharacter(ctx.params.id);

  return {
    props: {
      character: data
    }
  };

}