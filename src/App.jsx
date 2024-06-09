import { Button, Card } from "@radix-ui/themes"
import { useState } from "react"

const App = () => {

  const [denominator, setDenominator] = useState('')
  const [numerator, setNumerator] = useState('')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  return (
    <div className="grid place-items-center h-screen">
      <Card size="3">
        <h1 className="font-bold text-3xl">Your fractions.</h1>
        <h1>Simplified.</h1>

        <form>
          <input type='text' placeholder='Denominator' />
          <input type='text' placeholder='Numerator' />
          <Button>Submit</Button>
        </form>
      </Card>
    </div>
  )
}

export default App