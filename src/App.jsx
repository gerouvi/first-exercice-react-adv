import Circle from './components/atoms/Circle'
import InputColor from './components/atoms/InputColor'
import InputSize from './components/atoms/InputSize'
import Square from './components/atoms/Square'
import Triangle from './components/atoms/Triangle'
import useFigures from './lib/hooks/useFigures'

function App() {
  const { figures, setters } = useFigures()

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <InputColor
          label="Circle color"
          color={figures.circle.color}
          setter={setters.setCircleColor}
        />
        <InputSize
          label="Circle size"
          size={figures.circle.size}
          setter={setters.setCircleSize}
        />
        <Circle size={figures.circle.size} color={figures.circle.color} />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <InputColor
          label="Square color"
          color={figures.square.color}
          setter={setters.setSquareColor}
        />
        <InputSize
          label="Square size"
          size={figures.square.size}
          setter={setters.setSquareSize}
        />
        <Square size={figures.square.size} color={figures.square.color} />
      </div>
      <div>
        <InputColor
          label="Triangle color"
          color={figures.triangle.color}
          setter={setters.setTriangleColor}
        />
        <InputSize
          label="Triangle size"
          size={figures.triangle.size}
          setter={setters.setTriangleSize}
        />
        <Triangle size={figures.triangle.size} color={figures.triangle.color} />
      </div>
    </div>
  )
}

export default App
