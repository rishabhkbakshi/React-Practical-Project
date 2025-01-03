import React, { useEffect, useState } from 'react'
import Card from '../UI/Card'
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem'

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [httpError, setHttpError] = useState(undefined)

  useEffect(() => {
    const fecthMeals = async () => {
      const response = await fetch(
        'https://react-http-8d5c6-default-rtdb.firebaseio.com/meals.json'
      )
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const responseData = await response.json()
      const loadedMeals = []
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price
        })
        setMeals(loadedMeals)
        setIsLoading(false)
      }
    }

    fecthMeals().catch(error => {
      setIsLoading(false)
      setHttpError(error.message)
    })
  }, [])

  const mealsList = meals.map(meal => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    ></MealItem>
  ))

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading....</p>
      </section>
    )
  }

  if (httpError) {
    return (
      <section className={classes.MealsError}>
        <p>{httpError}</p>
      </section>
    )
  }
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  )
}

export default AvailableMeals
