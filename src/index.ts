import {  getMyLibName } from 'mylib'
import { foo } from './foo';

export const boot = () => {
  // getName()
  // window.setName()
  console.log(myName);
  console.log(foo)
  const name = getMyLibName()
  console.log(name);
}

boot()