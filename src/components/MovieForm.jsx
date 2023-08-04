import { useState } from 'react' 
import { useSelector, useDispatch } from 'react-redux'
import { createMovie } from '../features/Movie/movieSlice'

const MovieForm = () => {

  const [ title, setTitle ] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    dispatchEvent(createMovie({titulo}))
    setTitle('')
  }
  

  return (
    <section className='form'>
      <form onSubmit={onsubmit}>
        <div className='form-group'>
          <label htmlFor='titulo'> original title </label>
          <input 
          type='text' 
          name='titulo'
          id='titulo'
          value={title}
          onChange={(e) => setTitle(e.target.value)} 
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Agregar una nueva pelicula
          </button>
          
        </div>
      </form>

    </section>
  )
}

export default MovieForm