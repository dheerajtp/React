# Thirteenth Chapter - Type Safety

    ## Prop Types

    - Inorder to define the type of props we use prop types. So we need to install prop-types package
    - Import the prop-types package in the component where we want to define the type for the package.
    - `import PropTypes from 'prop-types'  ` and grab the component which we want to define the prop types by Component.propTypes and set it equal to an object and define the structure of our prop.

    Person.propTypes = {
        name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        mobile: PropTypes.number,
        friends: PropTypes.arrayOf(PropTypes.string),
    };

    -
