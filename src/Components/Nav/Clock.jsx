import { useEffect, useState } from "react"
import { getMinutes } from "../../modules/functions"

const Clock = () => {
  const [date, setDate] = useState(new Date())
  const time = date.toLocaleTimeString([], {hour: 'numeric', minute: 'numeric'})
  const currentTime = getMinutes(time)
  console.log(currentTime)

  return (
    <p className="display-items">
      {time}
    </p>
  )
}

export default Clock