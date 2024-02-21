import {render, screen} from "@testing-library/react";
import App from "./App.tsx";

// Test to check if the App component renders
// Add yet another comment
describe('App component', () => {
  it('should render app component', async () => {
    render(<App/>)

    expect(screen.getByText('GitHub Actions Education')).toBeInTheDocument()
  })
})
