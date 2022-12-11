### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - A front end framework for Javascript, it makes it easy to make reusable components and makes it easy to build modular applications.

- What is Babel?
  - You can't use JSX in Javascript, Babel transpiles it into Javascript so you can use it with React.

- What is JSX?
  - It stands for Javascript XML, it lets us write HTML in React.

- How is a Component created in React?
  - It's a function that knows how to render itsself in HTML.  You create a function and can return HTML from the function that will render.

- What are some difference between state and props?
  - Props are what is passed to the component (like function params) and state is something that's managed inside the component, like variables declared in a function.

- What does "downward data flow" refer to in React?
  - The child components are generally simpler and get passed functions/methods that are declared in the parent components.

- What is a controlled component?
  - In a controlled component form data is handled by React.

- What is an uncontrolled component?
  - Data can be handled by the DOM itsself vs being handled by React.

- What is the purpose of the `key` prop when rendering a list of components?
  - React keeps track of what is rendered when and instead of comparing every element step by step React can use the associated Key to keep track of what elements are being rendered when.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - You can re-order arrays so the index of something can change.

- Describe useEffect.  What use cases is it used for in React components?
  - useEffect is a built-in hook for "side effect" like timers, fetching data, or manually changing the DOM.  Each render of useEffect has it's own effect and you can control when it renders depending on what you pass to it.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - useRef returns an object with a key of current and the value is equal to the initial value passed to useRef.  It's usually used for accessing underlying DOM elements or setting up and clearing timers.
  - Changing a ref value would not cause a rerender.

- When would you use a ref? When wouldn't you use one?
  - Accessing DOM elements like a video so you can create buttons to adjust things like the playback rate.  
  - Timers because we can store the timer ID in a ref and stop the timer when it's removed from the DOM
  - You should not use them to toggle classes, set text, or do other things like that in the DOM.

- What is a custom hook in React? When would you want to write one?
  - A custom hook is a function that usually use built in hooks and you can use them across different components.  You might want to write them to toggle state, fetching data, etc.  You'd use them if you're using the same logic across multiple components (turning multiple things on/off you could use 1 toggle), or if the logic is cluttering up the component you can move the hook into its own file.
