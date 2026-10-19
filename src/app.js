const { getActiveProjects, getProjectsFunding  } = require("./service/projectService");
const activeProjects = getActiveProjects("active");
const completedProjects = getActiveProjects("completed");


console.log(getProjectsFunding(activeProjects));
console.log(getProjectsFunding(completedProjects));