const { getActiveProjects, getProjectsFunding , getProjectsReport } = require("./service/projectService");
const activeProjects = getActiveProjects("active");
const completedProjects = getActiveProjects("completed");

const matchingProjects = getProjectsReport("cancelled");
//console.log(getProjectsFunding(activeProjects));
//console.log(getProjectsFunding(completedProjects));
console.log(matchingProjects);