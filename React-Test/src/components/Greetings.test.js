import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('<Greetings Component>', () => {
  test('renders Hello World as a text', () => {
    //arrange
    render(<Greeting></Greeting>);

    //act
    //... nothing

    //assert
    //const helloWorldElement = screen.getByText('Hello World', { exact: false });
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
  });

  test('Check for original text before state change', () => {
    render(<Greeting></Greeting>);
    const pText = screen.getByText("It's good to see you", { exact: false });
    expect(pText).toBeInTheDocument();
  });

  test('Check for text after state change', () => {
    //Arrange
    render(<Greeting></Greeting>);

    //Act
    const btnElem = screen.getByText('Click me');
    userEvent.click(btnElem);

    //assert
    const pText = screen.getByText('Changed', { exact: false });
    expect(pText).toBeInTheDocument();
  });

  test('Test the visibility of the text before state change', () => {
    //Arrange
    render(<Greeting></Greeting>);

    //Act
    const btnElem = screen.getByText('Click me');
    userEvent.click(btnElem);

    //assert
    const pText = screen.queryByText("It's good to see you", { exact: false });
    expect(pText).toBeNull();
  });
});
