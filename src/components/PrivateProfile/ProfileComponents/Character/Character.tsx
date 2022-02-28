import React from 'react';
import styles from './Character.module.css';

export interface CharacterProps {
  data: any;
}

export default function Character({ data }: CharacterProps) {
  const rarityGradient = () => {
    switch (data.rarity) {
      case 5:
        return styles.Rare5;
      case 4:
        return styles.Rare4;
      case 105:
        return styles.Rare105;
    }
  };
  return (
    <div className={styles.CharacterList}>
      <div className={styles.Imgbox}>
        <img className={rarityGradient()} src={data.icon} alt='' />
      </div>
      <h3>{data.name}</h3>
      레벨: {data.level}
    </div>
  );
}
