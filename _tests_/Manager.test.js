const Manager = require('../lib/Manager');
const manager = new Manager('hunter', '69420', 'hlampton27@gmail.com', '420');

test('setting office number', () => {
    expect(manager.name).toBe('hunter')
    expect(manager.id).toBe('69420');
    expect(manager.email).toBe('hlampton27@gmail.com');
    expect(manager.officeNumber).toBe('420');
})
test('getName() method', () => {
    expect(manager.getName()).toBe('hunter');
 });
 test('getEmail() method', () => {
     expect(manager.getGithub()).toBe('hlampton27@gmail.com');
 });
 test('getOfficeNumber() method', () => {
    expect(manager.getgetOfficeNumber()).toBe('420');
});
test("get Role function", () => {
    expect(manager.getRole()).toBe('Manager');
});