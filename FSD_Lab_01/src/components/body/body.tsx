import employees from '../../assets/employees.json';

function BodySection () {
    return (
        <section>
            {Object.keys(employees).map((department) => (
                <div key={department}>
                <h4>{department}</h4>
                <ul className="employee_list">
                    {employees[department].map((employee, index) => (
                    <li key={index}>{employee}</li>
                    ))}
                </ul>
                </div>
            ))}
        </section>
)}

export default BodySection;