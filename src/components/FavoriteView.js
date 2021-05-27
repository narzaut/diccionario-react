import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { GlobalContext } from '../context/GlobalState'
import { DeleteOutlined, ArrowLeftOutlined } from '@ant-design/icons'

export function FavoriteView(props) {
  const { favorite } = useContext(GlobalContext)
  const [favoriteList, setFavoriteList] = favorite
  
  return (
    <div className='container'>
      <div className='favorite-title'>
        <span>Lista de palabras favoritas</span>
        <Link to='/'>
          <ArrowLeftOutlined style={{ fontSize:'2rem' }}/>
        </Link>
      </div>
      { favoriteList != '' ? favoriteList.map((obj) =>{
        return(
          <div className='search-output-container'>
            <div className='search-output-box'>
              <p>Palabra: {obj.word}</p>
              <p>Definicion: {obj.definition}</p>
            </div>
            <DeleteOutlined className='delete-btn btn-press' onClick={ () => {
              setFavoriteList(favoriteList.filter(word => word.id != obj.id))
            }}/>
          </div>
        )
      }) : <h2 style={ {color:'whitesmoke', padding: '2rem', textAlign:'center'} }>No existen palabras marcadas como favoritas.</h2> }
      { favoriteList != '' ? <Button type="primary" danger onClick={() => {
        setFavoriteList(favoriteList.filter(word => word !== word))
      }}>
        Borrar todas
      </Button> : ''
      }
    </div>
  );
}

