import { useEffect } from 'react'
import {
  Circle,
  InputColor,
  InputNumber,
  Square,
  Triangle,
} from './components/atoms'
import useShapes from './lib/hooks/useShapes'

function App() {
  const {
    color: circleColor,
    size: circleSize,
    setColor: setCircleColor,
    setSize: setCircleSize,
  } = useShapes(118, '#2a3f5a')

  const {
    color: squareColor,
    size: squareSize,
    setColor: setSquareColor,
    setSize: setSquareSize,
  } = useShapes(120, '#b12b34')

  const {
    color: triangleColor,
    size: triangleSize,
    setColor: setTriangleColor,
    setSize: setTriangleSize,
  } = useShapes(110, '#00fcff')

  useEffect(() => {
    if (circleColor === squareColor && squareColor === triangleColor)
      // eslint-disable-next-line no-alert, no-undef
      alert('All fiigures have the same color!')
  }, [circleColor, squareColor, triangleColor])

  useEffect(() => {
    if (squareSize === circleSize && circleSize === triangleSize)
      // eslint-disable-next-line no-alert, no-undef
      alert('All fiigures have the same size!')
  }, [circleSize, squareSize, triangleSize])

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <InputColor
          label="Circle color"
          color={circleColor}
          onChange={(e) => setCircleColor(e.target.value)}
        />
        <InputNumber
          label="Circle size"
          value={circleSize}
          onChange={(e) => setCircleSize(Number(e.target.value))}
        />
        <Circle size={circleSize} color={circleColor} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <InputColor
          label="Square color"
          color={squareColor}
          onChange={(e) => setSquareColor(e.target.value)}
        />
        <InputNumber
          label="Square size"
          value={squareSize}
          onChange={(e) => setSquareSize(Number(e.target.value))}
        />
        <Square size={squareSize} color={squareColor} />
      </div>
      <div>
        <InputColor
          label="Triangle color"
          color={triangleColor}
          onChange={(e) => setTriangleColor(e.target.value)}
        />
        <InputNumber
          label="Triangle size"
          value={triangleSize}
          onChange={(e) => setTriangleSize(Number(e.target.value))}
        />
        <Triangle size={triangleSize} color={triangleColor} />
      </div>
    </div>
  )
}

export default App
