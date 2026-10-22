const { getActiveProjects, getProjectsFunding , getProjectsReport, getProjectsByName, getProjectsByDepartment } = require("./service/projectService");
const  projects  = require("./data/projects");
const activeProjects = getActiveProjects("active");
const completedProjects = getActiveProjects("completed");

const matchingProjects = getProjectsReport("cancelled");
//console.log(getProjectsFunding(activeProjects));
//console.log(getProjectsFunding(completedProjects));
//console.log(matchingProjects);

/*console.log(getProjectsReport(undefined));
console.log(getProjectsReport(null));
console.log(getProjectsReport(123)); */

/*console.log(getProjectsByName(projects, "SMART"));
console.log(getProjectsByName(projects, "smart"));
console.log(getProjectsByName(projects, "xyz")); */

/*console.log(getProjectsByDepartment(projects, "engineering"));
console.log(getProjectsByDepartment(projects, "ENGINEERING"));
console.log(getProjectsByDepartment(projects, "xyz"));
*/

//console.log(getProjectsReport("completed"));
console.log(getProjectsByDepartment(projects, "engineering").length);