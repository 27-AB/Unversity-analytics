const projects = require("../data/projects");

function getActiveProjects(status) {
    return  projects.filter(project => project.status === status);
}

function getProjectsFunding(projects){
    return projects.reduce((sum, project) => sum + project.fundingETB, 0);

}
module.exports = { getActiveProjects,  getProjectsFunding}; 
