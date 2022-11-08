import { useState } from "react"
import City from "../city"

const Cities = () => {
  const initialCities = ['Paris', 'Berlin', 'Tokyo', 'London', 'Milan', 'Madrid']
  const [cities, setCities] = useState(initialCities) 
  const [isIndexKey, setIsIndexKey] = useState(false)

  const handleDeleteCity = (selectedCity: string) => {
    const filteredCities = cities.filter(city => city !== selectedCity)
    setCities(filteredCities)
  }

  const handleSwitchIndex = () => {
    setIsIndexKey(prevIndex => !prevIndex)
  }

  const handleReset = () => {
    setCities(initialCities)
  }

  return (
    <>
    <h2>Actual key = {!isIndexKey ? 'specific key' : 'index'}</h2>
      <button onClick={handleSwitchIndex}>switch key</button>
      {
        cities.map((city, index) => (
          <div 
            key={isIndexKey ? index : city} 
            onClick={() => handleDeleteCity(city)}
            className='city'
          >
              <City city={city} />
              <div className="city_key">
                  key = {isIndexKey ? index : city}
              </div>
          </div>
        ))
      }
      <button onClick={handleReset}>reset list</button>
    </>
  )
}

export default Cities