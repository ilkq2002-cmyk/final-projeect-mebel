import { chairsbenches } from "../db"


const Chairs = () => {
  return (
    <div>
        {
            chairsbenches.map((chairsbenches)=>(
                <div key={chairsbenches.id}>
                    <h3>{chairsbenches.name}</h3>
                    <p>Price: ${chairsbenches.price}</p>
                </div>
            ))
        }
    </div>
  )
}

export default Chairs