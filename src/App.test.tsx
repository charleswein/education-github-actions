import {render, screen} from "@testing-library/react";
import App from "./App.tsx";

describe('App component', () => {
  it('should render app component', async () => {
    render(<App/>)

    expect(screen.getByText('GitHub Actions Education')).not.toBeInTheDocument()
  })
})
