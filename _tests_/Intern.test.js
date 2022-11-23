const Intern = require("../lib/Intern");
const intern = new Intern('hunter', '69420', 'hlampton27@gmail.com', 'Kansas');

test('test for intern construct object', () => {
    expect(intern.name).toBe('hunter')
    expect(intern.id).toBe('69420');
    expect(intern.email).toBe('hlampton27@gmail.com');
    expect(intern.school).toBe('Kansas');
})

test('getName() method', () => {
    expect(intern.getName()).toBe('hunter');
 });
 test('getEmail() method', () => {
     expect(intern.getEmail()).toBe('hlampton27@gmail.com');
 });
 test('getOfficeNumber() method', () => {
    expect(intern.getId()).toBe('69420');
});
test("get Role function", () => {
    expect(intern.getSchool()).toBe('Kansas');
    
test("get Role function", () => {
    expect(intern.getRole()).toBe('Intern');
 });   

});