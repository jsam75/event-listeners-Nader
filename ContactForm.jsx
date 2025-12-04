function ContactForm() {

    function handleSubmit(e) {
        e.preventDefault();  // Prevent the default form submission behavior
        const formData = new FormData(e.target); // Create a FormData object from the form element, from regular DOM (not React), creates node
        
        //Method 1: Log each form field's name and value
        //for (const entry of formData.entries()) {  //From MDN Web Docs on FormData
         //   console.log(entry);   //will log an array of [name, value] pairs for each form field
       // }

        //Method 2: Use spread operator to convert FormData to an object
        // console.log([...formData.entries()]'); //Logs array of arrays

        //Method 3: Creates a table-like object
        console.table(Object.fromEntries(formData)); //Logs as an object with key-value pairs
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="First Name" />
            <input type="text" name="lastName" placeholder="Last Name" />
            <input type="number" name="age" placeholder="Age" />
            <button type="submit">Submit</button>
            </form>
        </>
    );
}

export default ContactForm;

/*Observations:
1. The ContactForm component renders a simple form with input fields for first name, last name, and age, along with a submit button.
2. The default behavior of the form submission (which would typically refresh the page) is prevented using e.preventDefault() in the 
   handleSubmit function.
3. Learning Point: there are multiple ways to capture data from a form in React. One way is to create a form data object (best practice method)
   in the handleSubmit function.  Refer to MDN Web Docs on FormData for more information.  3 different ways are shown there.
   Use of Web APIs like FormData is encouraged in React to handle form data efficiently.  It also makes it easier for other
   developers to understand your code.

   Note:  this exercise does not use controlled components (where form inputs are tied to React state).  Controlled components are often
   used in React for form handling, but this example focuses on using the FormData API for simplicity.
*/