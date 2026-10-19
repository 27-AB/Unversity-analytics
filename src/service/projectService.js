const projects = require("../data/projects");

function getActiveProjects(status) {
    return  projects.filter(project => project.status === status);
}

function getProjectsFunding(projects){
    return projects.reduce((sum, project) => sum + project.fundingETB, 0);

}

function getProjectsReport(status){
    if(status !== "active" || status !== "completed"){
        return "Invalid inputs";
    }
    
    const matchingProjects = getActiveProjects(status);
     
    // 1. Calculate the number of matching projects
     const matching = matchingProjects.length;



    // 2. Calculate their total funding using our existing function
    const funding = getProjectsFunding((matchingProjects));

    // 3. Get their names using map()
    const projectNames = matchingProjects.map(project => project.name);

    // 4. Return all three results in one object
    return {
        matching,
        funding,
        projectNames
    }
}
module.exports = { getActiveProjects,  getProjectsFunding, getProjectsReport}; 
