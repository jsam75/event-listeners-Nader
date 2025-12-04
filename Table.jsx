function Table() {
    function handleClick(e) {
        console.log(e.target.textContent);
    }

    return (
        <>
            <table>

                <thead>
                <tr>
                    <td>Subject</td>
                    <td>Mark</td>
                    <td>Grade</td>
                </tr>
                </thead>

                <tbody onClick={handleClick}>

                    <tr>
                        <td>Math</td>
                        <td>90</td>
                        <td>A</td>
                    </tr>

                    <tr>
                        <td>Science</td>
                        <td>85</td>
                        <td>B</td>
                    </tr>

                    <tr>
                        <td>History</td>
                        <td>88</td>
                        <td>A</td>
                    </tr>   

                    <tr>
                        <td>English</td>
                        <td>92</td>
                        <td>A</td>
                    </tr>

                    <tr>
                        <td>Art</td>
                        <td>80</td>
                        <td>B</td>
                    </tr>

                </tbody>

            </table>
        </>
    );
  }


export default Table;

/*Observations:
1. The Table component renders a simple HTML table structure with headers and multiple rows of data.
2. The challenge is where to add an event listener to handle click events on the table rows. Instead of adding individual onClick 
   handlers to each row, we can utilize event delegation by attaching a single onClick handler to the <tbody> element.
*/