import { Button, ButtonProps } from 'tamagui';

interface MyInterface {
  text: 'this is the only valid text';
}


const MyComponent = ({text} : MyInterface) => {
  return <>text</>;
}

const TestComponent = () => {
  <MyComponent text={"this is the only valid text"}/>
}

export const BaseButton = (props: ButtonProps) => <Button size={"sarasa"} backgroundColor={"s"} {...props} />;
