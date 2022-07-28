import React, { useCallback, useEffect, useState } from 'react'

import MoviesList from './components/MoviesList'
import './App.css'
import AddMovie from './components/AddMovie'

function App () {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchMovieHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(
        'https://react-http-8d5c6-default-rtdb.firebaseio.com/movies.json'
      )

      if (response.status === 200) {
        const data = await response.json()

        const loadedMovies = []
        for (const key in data) {
          loadedMovies.push({
            id: data[key].id,
            title: data[key].title,
            openingText: data[key].openingText,
            releaseDate: data[key].releaseDate
          })
        }

        setMovies(loadedMovies)
      } else {
        throw new Error('Something went wrong!')
      }
    } catch (error) {
      setError(error.message)
    }
    setIsLoading(false)
  }, [])

  useEffect(() => {
    fetchMovieHandler()
  }, [fetchMovieHandler])

  const addMovieHandler = async movie => {
    setIsLoading(true)
    try {
      const response = await fetch(
        'https://react-http-8d5c6-default-rtdb.firebaseio.com/movies.json',
        {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      if (response.status === 200) {
        response.json()
        fetchMovieHandler()
      } else {
        throw new Error('Something went wrong!')
      }
    } catch (error) {}
    setIsLoading(true)
  }

  let content = <p>Found no Movies.</p>

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }

  if (error) {
    content = <p>{error}</p>
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  )
}

export default App
