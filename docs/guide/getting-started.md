# getting-started

```sh
setopt HIST_IGNORE_ALL_DUPS
sort -t ";" -k 2 -u ~/.zsh_history | sort -o ~/.zsh_history
```

```js
interface Animal {
  name: string;
}

interface Dog extends Animal {
  wangwang(): void;
}

let animal1: Animal;
let dog1: Dog;
animal1 = dog1;

let arrAnimal: Array<Animal>
let arrDog: Array<Dog>
// 兼容，可以赋值，这个就是协变，也就是Array衍生后的类型是协变
arrAnimal = arrDog
```
