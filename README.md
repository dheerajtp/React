# Twelth Chapter

    ## Custom Hooks

    # Rules of hooks

    - To create a hook we must use 'use' and it should be camelcase. eg : 'useToggle.js'
    - We can only call the hook inside of a component.
    - We can't call it inside of other function. ie, the hook should be in the highest level of the react application.

    # Creating a hook

    - A hook is a function that allows us to abstract a lot of logic in react and it is different than a function because with the hook we can access the state of an application and even the life cycle of an application . And with a function we can't do those.
    - We can pass arguments to the hook because we need to make it reusable through out our application.
    - Create a function to do the toggle and redo it.
    - And then we can return something. We are never gonna return a jsx or a ui. Hooks are meant to return the logic not the ui logic like actual computational logic . So we will return here what ever we want to return back.
    - So in toggle hook we will return the state and the function as an array. We are returning it as an array because we can call this as something else.
