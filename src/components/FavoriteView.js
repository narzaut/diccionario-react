import React, { useContext, useState, useEffect } from 'react';
import { Button } from 'antd';
import { GlobalContext } from '../context/GlobalState'
import { DeleteOutlined } from '@ant-design/icons'

export function FavoriteView(props) {
  const { favorite } = useContext(GlobalContext)
  const [favoriteList, setFavoriteList] = favorite
  

  return (
    <>
          <div className='container'>
              {favoriteList != '' ? favoriteList.map((obj) =>{
                return <>
                  <div className='search-output-container'>
                    <div className='search-output-box'>
                      <p>Palabra: {obj.word}</p>
                      <p>Definicion: {obj.definition}</p>
                    </div>
                    <DeleteOutlined style={{fontSize:'2rem'}}onClick={() =>{
                      setFavoriteList(favoriteList.filter(word => word.id != obj.id))
                    }}/>
                  </div>
                </>
              }): 'No existen palabras marcadas como favoritas.'}
              {favoriteList != '' ? <Button type="primary" danger onClick={() => {
                setFavoriteList(favoriteList.filter(word => word !== word))
              }}>
                Borrar todas
              </Button> : ''}
          </div>

    </>
  );
}

