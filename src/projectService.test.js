const test = require("node:test"); // loading the or requireing the test module from node 
const assert =require("node:assert"); // requiring assert module from node 
const  projects  = require("./data/projects");  //fetching project from this path
const { getProjectsByName } = require("./service/projectService"); //getting the getProjectName from the defined path

test("returns an empty array when no project matches", () => {  // this one test case 
    const result = getProjectsByName(projects, "xyz");

    assert.deepStrictEqual(result, []);  //compare the result and empty array to check the excpected result and the observed one 
});

test("find the project regardeless of capatialization", () => {
    const result = getProjectsByName(projects, "SMART");

    assert(result.length, 1);
    assert(result[0].name, "smart campus");
})