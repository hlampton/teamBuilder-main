const Employee = require('../lib/Employee');
const employee = new Employee('hunter', '69420', 'hlampton27@gmail.com');

test('test if we get coinstruct value for employee', () => {
    expect(employee.name).toBe('hunter');
    expect(employee.id).toBe('69420');
    expect(employee.email).toBe('hlampton27@gmail.com');
});

test('getName() method', () => {
   expect(employee.getName()).toBe('hunter');
});
test('getEmail() method', () => {
    expect(employee.getEmail()).toBe('hlampton27@gmail.com');
});
test('getRole() method', () => {
    expect(employee.getRole).toBe('Employee');
});
