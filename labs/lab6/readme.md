<!--- The following README.md sample file was adapted from https://gist.github.com/PurpleBooth/109311bb0361f32d87a2#file-readme-template-md by Gabriella Mosquera for academic use ---> 



# Lab 2

**[Optional]** If what is being submitted is an individual Lab or Assignment. Otherwise, include a brief one paragraph description about the project.

* *Date Created*: 05 March 2024
* *Last Modification Date*: 05 March 2024
* *Lab URL*: <https://web.cs.dal.ca/~maguirer/csci3172/lab6/>
* *Git URL*: <https://git.cs.dal.ca/maguirer/csci3172-web-centric/-/tree/main/labs/Lab6?ref_type=heads>



## Authors

* [Maguire Richard](Maguire@dal.ca)


## Sources Used

### App.js

*Lines 6-16 + line 21*

```
  const myRef = useRef(null);

  function Spin(){
    const target = myRef.current;
    target.className = "Spin-img";
  }

  function UnSpin(){
    const target = myRef.current;
    target.className = "NoSpin-img";
  }

<img src={zoid} className="NoSpin-img" alt="logo" id="Zoidimg" ref={myRef}/>
```

The code above was created by adapting the code in [StackOverflow - Joseph D.](https://stackoverflow.com/a/57782009) as shown below: 

```
const {useRef} = React;

function App() {
  const ref = useRef(null);
  const onClick = () => {
    const span = ref.current; // corresponding DOM node
    span.className = "hidden";
  };
  return (
    <div>
      <span ref={ref} className="">The Quick Brown Fox.</span>
      <button onClick={onClick}>Hide</button>
    </div>
  );
}
```

- <!---How---> The code in [StackOverflow - Joseph D.](https://stackoverflow.com/a/57782009) was implemented by referencing how they accessed and modified the className attribute and using the same strategy.
- <!---Why---> [StackOverflow - Joseph D.](https://stackoverflow.com/a/57782009)'s Code was used since I wanted to manually spin the image by changing its class name.
- <!---How---> [StackOverflow - Joseph D.](https://stackoverflow.com/a/57782009)'s Function was modified by placing it into a not inline function and changing values and variable names.
