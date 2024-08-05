Puzzle #1

```
run()
.then(function () {
  return runAnotherFunction();
})
.then(handler);
```

```
run
|-----------------|
                  runAnotherFunction(undefined)
                  |------------------|
                                     handler(resultOfrunAnotherFunction)
                                     |------------------|
--------------------------------------------------------> (time)
```

Puzzle #2
```
run()
.then(function () {
  runAnotherFunction();
})
.then(handler);
```
```
run
|-------------------|
                    runAnotherFunction(undefined)
                    |--------------|
                                    handler(undefined)
                                    |------------------|
--------------------------------------------------------> (time)
`
Explaination:
- run is called and executed and waits for the promise to resolve
- runAnotherFunction is called and executed and waits for completion but doesn't return a value
- handler is called and executed with the value of runAnotherFunction which is undefined
```

Puzzle #3
```
run()
.then(runAnotherFunction())
.then(handler);
```
```
run
|-----------------|
runAnotherFunction(undefined)
|------------------|
                    handler(undefined)
                    |------------------|
---------------------------------------> (time)
```
explaination:
- run is called and executed
- the params of then is a function call which is runAnotherFunction() which is executed immediately and returns undefined
- handler is called once the previous promise is resolved and executed with the value of runAnotherFunction which is undefined
```

Puzzle #4
run()
.then(runAnotherFunction)
.then(handler);
`
run
|-----------------|
                  runAnotherFunction(resultOfRun)
                  |------------------|
                                     handler(resultOfRunAnotherFunction)
                                     |------------------|
--------------------------------------------------------> (time)
`
explaination:
- run is called and executed and waits for the promise to resolve
- the reason for the wait is the previous puzzle invokes runAnotherFunction that has the parenthesis which is a function call. this version doesn't have the parenthesis so it waits for the promise to resolve
- handler is called and executed with the value of runAnotherFunction which is the result of the promise
```