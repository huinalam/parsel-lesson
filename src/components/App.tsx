import * as React from 'react'

interface AppProps {
  onToggle?(on: boolean): void
}

const App: React.SFC<AppProps> = ({
  onToggle = (on: boolean) => console.log('ToggleStatus:', on),
}: AppProps) => {
  return (
    <div className="container" data-testid="toggle-container">
        hello world
    </div>
  )
}

export default App