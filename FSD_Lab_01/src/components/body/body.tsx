import employees from '../../assets/employees.json';

function BodySection () {
    return (
        <section className="body">

        
            {Object.keys(employees).forEach(department => {

                key = employees[department]
                // selects the node where the employee names will be listed under
                const employeeListNode = document.querySelector(".employee_list");

                employees.forEach(employee => {
                // create new DOM li node for employees under each department
                const newLiNode = document.createElement("li");

                // modify HTML in new DOM node to include iterated employees
                newLiNode.innerText = employee;

    
        </section>
        }
        )
    }}
    )
}