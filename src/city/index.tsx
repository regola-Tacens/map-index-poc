import { memo } from "react"

const City = ({city}: {city: string}) => {
  console.log('render', city)

  return (
    <p>
      {city}
    </p>
  )
}

export default memo(City)