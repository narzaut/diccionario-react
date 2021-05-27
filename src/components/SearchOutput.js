import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'
import { StarOutlined } from '@ant-design/icons'
import { idGenerator } from '../helpers/idGenerator'

export function SearchOutput(props) {
  const { favorite } = useContext(GlobalContext)
  const [favoriteList, setFavoriteList] = favorite 

  const onClick = () => {
    let sortedList = [...favoriteList, { word:props.word, definition: props.definition, id: idGenerator() }]
    setFavoriteList(sortedList)
  }

  return (
    <>
      <div className='search-output-box'>
        <p>Palabra: { props.word }</p>
        <p>Definicion: { props.definition }</p>
      </div>
      { props.word != '' ? <StarOutlined onClick={ onClick } className='fav-btn btn-press'/> : null }
    </>
  );
}

