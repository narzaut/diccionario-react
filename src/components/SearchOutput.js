import React, { useContext, useState, useEffect} from 'react';
import { GlobalContext } from '../context/GlobalState'
import { StarOutlined } from '@ant-design/icons'
export function SearchOutput(props) {
  const { favorite } = useContext(GlobalContext)
  const [favoriteList, setFavoriteList] = favorite 


  function guidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  const onClick = () => {
    let sortedList = [...favoriteList, {word:props.word, definition: props.definition, id: guidGenerator()}]
    setFavoriteList(sortedList)
  }

  return (
    <>
          <div className='output-container'>
            <div className='output-box'>
                <p>Palabra: {props.word}</p>
                <p>Definicion: {props.definition}</p>
            </div>
            {props.word != '' ? <StarOutlined onClick={onClick} style={{fontSize: '2rem'}}/> : null}
          </div>
          {console.log(favoriteList)}

    </>
  );
}

