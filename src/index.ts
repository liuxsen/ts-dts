import {  getMyLibName } from 'mylib'

export const boot = () => {
  // getName()
  // window.setName()
  // console.log(myName);
  // console.log()
  const name = getMyLibName()
  console.log(name);
}

boot()