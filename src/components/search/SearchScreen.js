import queryString from 'query-string';
import { useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';

export const SearchScreen = () => {

  
  const navigate = useNavigate();
  const location = useLocation();
  const { q = '' } = queryString.parse( location.search );
  
  const [ { name }, handleInputChange ] = useForm({
    name: q
  });

  const heroesFiltered = useMemo( () => getHeroesByName(q), [q] );  
  
  const handleSubmit = event => {
    event.preventDefault();
    navigate(`?q=${ name }`);
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr/>
      <div className="row">

        <div className="col-5">
          <h4>Search form</h4>
          <hr/>

          <form className="input-group mb-3" 
                onSubmit={ handleSubmit }>

            <input type="text" 
                   className="form-control" 
                   name="name"
                   autoComplete="off"
                   placeholder="Find your hero" 
                   onChange={ handleInputChange }
                   value={ name }
                   aria-label="Find your hero" aria-describedby="button-addon2"/>

            <button className="btn btn-outline-primary" 
                    type="submit"
                    id="button-addon2">Search</button>

          </form> 
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr/>
          {
            ( q === '' ) && <div className="alert alert-info">Search a hero</div>
          }
          {
            ( q !== '' && heroesFiltered.length === 0 ) && <div className="alert alert-danger">There's no a hero with <u>{ q }</u></div>
          }
          {
            heroesFiltered.map( hero => (
              <HeroCard key={ hero.id } { ...hero }/>
            ))
          }
        </div>
      </div>
    </div>
  )
};