import { useState } from "react"
import * as Form from "@radix-ui/react-form"
import { Button } from "@radix-ui/themes"

const App = () => {

  const [denominator, setDenominator] = useState('')
  const [numerator, setNumerator] = useState('')
  const [result, setResult] = useState('')
  const [shareText, setShareText] = useState('Share this result')

  const simplifyFraction = (e) => {
    e.preventDefault()
    
    const gcd = (a, b) => {
      return b === 0 ? a : gcd(b, a % b)
    }

    const divisor = gcd(numerator, denominator)
    const simplifiedNumerator = numerator / divisor
    const simplifiedDenominator = denominator / divisor

    setResult(`${simplifiedNumerator}/${simplifiedDenominator}`)
  }

  return (
    <div className="flex items-center justify-center gap-4 h-screen App">
      <div className="border border-gray-700 p-4 rounded-lg">
        <h1 className="font-bold text-3xl">Your fractions.</h1>
        <h1>Simplified.</h1>

        <Form.Root className="w-[260px] mt-8" onSubmit={simplifyFraction}>
          <Form.Field className="grid mb-[10px]" name="numerator">
            <div className="flex items-baseline justify-between">
              <Form.Label className="FormLabel">Numerator</Form.Label>
            </div>
            <Form.Control asChild>
              <input className="Input" type="number" value={numerator} onChange={(e) => {setNumerator(e.target.value)}} required />
            </Form.Control>
          </Form.Field>
          <Form.Field className="grid mb-[10px]" name="denominator">
            <div className="flex items-baseline justify-between">
              <Form.Label className="FormLabel">Denominator</Form.Label>
            </div>
            <Form.Control asChild>
              <input className="Input" type="number" value={denominator} onChange={(e) => {setDenominator(e.target.value)}} required />
            </Form.Control>
          </Form.Field>
          <Form.Submit asChild>
            <button className="Button" style={{ marginTop: 10 }}>
              Simplify Now
            </button>
          </Form.Submit>
        </Form.Root>
      </div>

      <div className="w-[292px] border border-gray-700 p-4 rounded-lg h-[329px]">
        <h1 className="font-bold text-3xl">Result</h1>
        <p>Your simplified fraction is:</p>
        {
          result !== '' && (
            <div>
              <h1 className="mt-4 font-bold">{result}</h1>
              <button className="Button mt-4" onClick={
                () => {
                  navigator.clipboard.writeText(`Did you know that ${numerator}/${denominator} is equal to ${result}? Try it yourself!`)
                  setShareText('Copied!')
                }
              }>{shareText}</button>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default App