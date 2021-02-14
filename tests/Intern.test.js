// Unit tests for intern
const Intern = require("../lib/Intern");

it("Can set school via constructor", () => {
    const testValue = "JHU";
    const e = new Intern("Fairy", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);
});

it("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Fairy", 1, "test@test.com", "JHU");
    expect(e.getRole()).toBe(testValue);
});

it("Can get school via getSchool()", () => {
    const testValue = "JHU";
    const e = new Intern("Fairy", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});