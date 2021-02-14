const Engineer = require("../lib/Engineer");

it("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Joe", 1, "test@test.com", testValue);
    expect(e.github).toBe(testValue);
});

it("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Joe", 1, "test@test.com", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

it("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Joe", 1, "test@test.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});