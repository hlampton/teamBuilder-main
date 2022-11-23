const Engineer = require('../lib/Engineer');
const engineer = new Engineer('hunter', '69420', 'hlampton27@gmail.com');

test('setting up github via constructor', () => {
    expect(engineer.name).toBe('hunter');
    expect(engineer.id).toBe('69420');
    expect(engineer.email).toBe('hlampton27@gmail.com');
});

test('getName() method', () => {
   expect(engineer.getName()).toBe('hunter');
});
test('getEmail() method', () => {
    expect(engineer.getEmail()).toBe('hlampton27@gmail.com');
});
test('getRole() method', () => {
    expect(engineer.getRole).toBe('Engineer');
});
