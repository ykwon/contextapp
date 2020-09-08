import React, { createContext, Component } from 'react';

// will create context and assign to ThemeContext variable
export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  // state will be the shared data to supply to the diffenet component
  state = {
    isLightTheme: true,
    light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
    dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
  }
  toggleTheme = () =>{
    this.setState({isLightTheme: !this.state.isLightTheme})
  }
  render() {
    //this.props.childer is Nabvar , BookList
    return (
      <ThemeContext.Provider value={{ ...this.state, toggleTheme: this.toggleTheme }}>        
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
