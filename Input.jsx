function Input() {

    function handleChange(e) {
        console.log(e.target.value); 
        const inputValue = e.target.value;
        const tagName = e.target.tagName;
        const id=e.target.getAttribute('id');
        const log= `[${tagName} id="${id}"]: ${inputValue}`;

        console.log(log);
    }

    return (
        <>
            <input type="text" id="username" onChange={handleChange} />
        </>
    );
}

export default Input;

/*Observations:
1. The handleChange function is triggered every time the user types into the input field, logging the current value.
2. The event object (e) provides access to the target element (the input field) and its properties, such as value, tagName, and id.
3. The logged output includes the tag name and id of the input element along with its current value, formatted for clarity.
4. The SyntheticEvent in React wraps the native event, it shows up as an object in the console.  Refer to object attributes
   to know what kind of information you can extract from the event. (This is where target, type, tagName, etc are found).
5. Keep the function & return statement dynamic and use e.target to refer to the element that triggered the event, making the handler 
   reusable for multiple elements if needed.
*/