const test = require("node:test"); // loading the or requireing the test module from node 
const assert =require("node:assert"); // requiring assert module from node 
const  projects  = require("./data/projects");  //fetching project from this path
const { getProjectsByName, getProjectsByDepartment, getCollegeFunding, getCollegeReport } = require("./service/projectService"); //getting the getProjectName from the defined path
const { getProjectsReport } = require("./service/projectService");
const { error } = require("node:console");

test("returns an empty array when no project matches", () => {  // this one test case 
    const result = getProjectsByName(projects, "xyz");

    assert.deepStrictEqual(result, []);  //compare the result and empty array to check the excpected result and the observed one 
});

test("find the project regardeless of capatialization", () => {
    const result = getProjectsByName(projects, "SMART");

    assert(result.length, 1);
    assert(result[0].name, "smart campus");
});

test("return number of status matching projects", () => {
   const result = getProjectsReport("completed");

   assert.deepStrictEqual(result.matching, 1)
   assert.deepStrictEqual(Object.keys(result),
["matching", "funding", "projectNames"]);
});

test("return correct funding number for completed projects", () => {
    const result = getProjectsReport("completed");

    assert.deepStrictEqual(result.funding,  30000);
});

test("return all projects when the keyword is empty", () => {
    const result = getProjectsByName(projects, "");

    assert.strictEqual(result.length, projects.length);
});

test("return an error for keyword null", () => {
const result = getProjectsByName(projects, null);
assert.deepStrictEqual(result, {error: "Keyword must be a string"});
});

test("returns an error for an invalid status", () => {
    const result = getProjectsReport("cancelled");

    assert.deepStrictEqual(result, {error: "Invalid status"});
});

test("returns an error when status is not a string", () => {
    const result = getProjectsReport(null);

    assert.deepStrictEqual(result, {
        error: "Status must be string"
    });
});

test("return correct college", () => {
    const result = getProjectsByDepartment(projects, "engineering");
    assert.strictEqual(result.length, 2);

    result.forEach(project => {
        assert.strictEqual(project.college, "Engineering");
    });
});

test("return error for unknown college", () => {
    const result = getProjectsByDepartment(projects, "Medicine");
    assert.deepStrictEqual(result, {
        error: "Unknown college"
    });
});

test("return an error when the college is null", () => {
    const result = getProjectsByDepartment(projects, null);

    assert.deepStrictEqual(result, {
        error: "College must be a string"
    });
});

test("accepts uppercase college name", () => {
 const result = getProjectsByDepartment(projects, "AGRICULTURE");

 assert.ok(Array.isArray(result));
 assert.ok(result.every(project => project.college === "Agriculture"));
});

test("return funding of selected college", () =>{
 const result = getCollegeFunding(projects, "Engineering");

 assert.strictEqual(result, 120000)
});

test("return info of college project", () => {
    const result = getCollegeReport(projects, "Engineering");
    assert.deepStrictEqual(result, {
         college: 'Engineering', matching: 2, collegeFunding: 120000 
    });
})

test("return unknown college when college is not found", () => {
    const result = getCollegeReport(projects, "Medicine");
    assert.deepStrictEqual(result, {
        error: "Unknown college"
    })
})

test("return in valid typof when the college typeof is different from string", () => {
    const result = getCollegeReport(projects, null);

    assert.deepStrictEqual(result, {
        error: "College must be a string"
    });
})