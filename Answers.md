1. What problem does the context API help solve?

≈ A way to create global variables that can be passed around in a react app

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

≈ Store is where all the data is held in the global scope, every time state or any data is up dated it is up dated in the store so it is alway current and thus a source of true data or state

≈ Actions modify are state in the app

≈ The reducer is a pure function that takes the previous state and a action, and returns the next state.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

≈ Application state. state lives in the global scope and all components have access to it.

≈ Component state. state lives in and is updated in the component and is not always able to flow out of a component up to something different.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

≈ Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

≈ Store is very interesting, it nice to have data in the global scope and available to use in any part of the app.
