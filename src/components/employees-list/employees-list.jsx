import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data }) => {
    const listItem = data.map((item) => {
        const {id, ...props} = item;

        return (
            <EmployeesListItem key={id} {...props} />
        );
    });

    return (
        <ul className='app-list list-group'>
            {listItem}
        </ul>
    );
};

export default EmployeesList;
