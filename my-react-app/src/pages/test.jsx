import { useState } from "react"

const Label = ({ value }) => {
  return <span>{value}</span>
}

const Button = ({ children, onClick, value }) => {
  return (
    <button
      className="inline-flex px-2 py-0.5 text-base font-medium text-gray-800 bg-gray-200 border border-gray-300 rounded"
      onClick={onClick}
      disabled={value === "done!"}
    >
      {children}
    </button>
  )
}

const TestPage = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="flex items-center gap-3 m-5">
      <Button
        value={count}
        onClick={() => {
        if (count === 0) {
          setCount("done!")
        } else {
          setCount(count - 1)
        }
      }}>-</Button>
      <Label value={count} />
      <Button
        value={count}
        onClick={() => {
        if (count >= 10) {
          setCount("done!")
        } else {
          setCount(count + 1)
        }
      }}>+</Button>
      <Button onClick={() => setCount(0)}>Reset</Button>
    </div>
  )
}

export default TestPage