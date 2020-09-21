export default {
    propsToState(props) {
        return Promise.resolve({
            title: `Hello, ${props.name}`
        });
    }
}