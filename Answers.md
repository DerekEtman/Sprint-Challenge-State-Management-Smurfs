1. What problem does the context API help solve?
 
    - Context API is a way to store variables and pass them around without having to prop drill

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
 
  Actions - Tells the reducers what we want
  Reducers - carry out the tasks 
  Store - The central hub that stores all information to be passed around

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
 
    - Component state stores data at a local level and can pass it to children componenets, things that you dont need passed through out the app
    - Application state is global: it shares information throughout the entire app

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 
    - Redux Thunk changes your action object into a function. So we can place stuff like axios calls in our action creators

1. What is your favorite state management system you've learned and this sprint? Please explain why!
 
  - I think Redux is pretty cool, It feels very lean in the sense of having global store and having it immutable seems fancy

