[SOFTSPIDERS](https://github.com/softspiders/softspiders)

# *node-cli-commander-ts-jest-starter*

*Node* CLI starter on *TypeScript* which is testing by *Jest*

## Feature tags

- cli
- commander
- jest
- mock
- node
- starter
- template
- typescript

---

## Direct ancestors
[Node CLI starter](https://github.com/softspiders/node-cli-starter)

---

## Requirements

[NodeJS](https://nodejs.org/en/)

---

## Authors

- [levioza](https://github.com/levioza) - original code 
- [Alexander Lapygin](https://github.com/AlexanderLapygin) - adaptation to *Jest* and *Soft Spiders* 

## Inspired by

[levioza](https://github.com/levioza)'s [nodejs-cli-starter-template](https://github.com/levioza/nodejs-cli-starter-template)

---

## Install (download dependencies)

```sh
npm i
```

---

## Test

Run
```sh
npm test
```

Should see:


```sh
> node-cli-starter@0.1.0 test ${YOUR_PATH}/node-cli-ts-starter
> jest

 PASS  src/__tests__/writer-spec.ts
  Writer
    #write()
      √ should write a message (5ms)
      √ should write a default message (1ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        5.733s
Ran all test suites.
```

---

## Build

```sh
npm run build
```

---

## Install as a CLI

```sh
npm i -g
```

## Run

```sh
cli-command
```
or
```sh
cli-command -h
```

Should see:
```sh
Usage: cli-command [options] [command]

Options:
  -V, --version    output the version number
  -h, --help       output usage information

Commands:
  write [message]  say hello!
  help [cmd]       display help for [cmd]
```

Run
```sh
cli-command -V
```

Should see:

```sh
1.0.0
```

---

## License

Licensed under the [MIT license](./LICENSE).
