import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom'
import { Input, Button, Alert} from 'antd';
import { useLocalStorage } from '../hooks/useLocalStorage'
import { GlobalContext } from '../context/GlobalState'
import { SearchOutput } from './SearchOutput'

export function SearchView() {
  const { Search } = Input;
  const { api } = useContext(GlobalContext)
  const [apiUrl, setApiUrl] = api 
  
  const [word, setWord] = useLocalStorage('currentWord', [])
  const [definition, setDefinition] = useLocalStorage('currentDefinition', [])
  const [error, setError] = useState(false)
  const [query, setQuery] = useState('')
  
  const onSearch = (query) =>{
    fetch(apiUrl+query)
      .then(res => res.json())
      .then(result => {
        result.map(word => setWord(word.word))
        result.map(word => setDefinition(word.meanings[0].definitions[0].definition))
        setError(false)
        setQuery('')
      })
      .catch(() =>{
        setWord([])
        setError(true)
      })
  }

  return (
    <div class='app-container'>
      <div class='search-input-container'>
        <label style={{ marginBottom: '1rem' }}>Busque una palabra</label>
        <Search onChange={ e => setQuery(e.target.value) } value={ query } placeholder="Ingrese una palabra" onSearch={ onSearch } enterButton />
      </div>
      <div class={word != '' ? 'search-output-container' : 'alert-error'}>
        {word != '' ? <SearchOutput word= {word} definition= {definition}/> : ''}
      </div>
      {error === true ? <Alert style={{ marginBottom: '10%' }} message="La palabra que esta buscando no existe" type="error" showIcon/> : ''}
      <Link to='/favorite'>
        <Button type="dashed" ghost>
          Mostrar palabras favoritas
        </Button>
      </Link>     
    </div>
  );
}

