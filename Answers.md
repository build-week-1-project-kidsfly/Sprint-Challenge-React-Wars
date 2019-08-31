# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    React JS is a JavaScript library that tries to help make web development more modular and reusable. Components sections of code that compose a greater application. These components are meant to be small sections of code that can be reused over again to build a working application. Props and state are used to transmit data either locally or from an API to components. In doing so, components that have been written correctly can pretty much manage themselves no matter how much data is being injected.

1. What does it mean to think in react?     Thinking react is thinking modularly. This means that a developer will construct a small section of code in such a fashion that another developer can read and quite possibly reuse within the context of components.

1. Describe state.  State is a container that holds data. This could be an array, an object, a string, or and integer. Once established, this state can be injected into several components to display different information, it can also be manipulated.

1. Describe props.  Props are the anchors that allow state to hold onto a component. Without props components would not be able to receive data from state.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?    Side effects modify anything outside of the body of the function. Effects syncing is achieved by passing in a dependency array as the second argument to the effect hook.  
