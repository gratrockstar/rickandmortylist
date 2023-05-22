import Image from 'next/image';
import Link from 'next/link';
import styles from './Card.module.scss';

const Card = (props) => {
  const {character} = props;

  return (
    <>
      <div className={styles.card}>
        <Image
          src={character.image}
          width='300'
          height='300'
          alt={character.name}
        />
        <h2>
          <Link href={`characters/${character.id}`}>{character.name}</Link>
        </h2>
      </div>
    </>
  );

};

export default Card;