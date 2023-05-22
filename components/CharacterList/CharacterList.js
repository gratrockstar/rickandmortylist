import Card from '../Card/Card';
import styles from './CharacterList.module.scss';

const CharacterList = (props) => {
  const {characters} = props;

  return (
    <div className={styles[`characters-list`]}>
    { characters? (
      <ul>
        { characters.map((character) => (
          <li key={character.id}>
            <Card character={character} />
          </li>
        )) }
      </ul>
    ) : null }
    </div>
  );

}

export default CharacterList;