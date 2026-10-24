const projects = require("../data/projects");

function getActiveProjects(status) {
    return  projects.filter(project => project.status === status);
}

function getProjectsFunding(projects){
    return projects.reduce((sum, project) => sum + project.fundingETB, 0);

}

function getProjectsReport(status){

    if(typeof status !== "string"){
        return  { error: "Status must be string"};
    }

    status = status.toLowerCase();
    if(status !== "active" && status !== "completed"){
        return {error: "Invalid status"};
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
function getProjectsByName(projects, keyword){
    if(typeof keyword !== "string"){
        return {error: "Keyword must be a string"};
    }
    return projects.filter(project => project.name.toLowerCase().includes(keyword.toLowerCase()))
}
function getProjectsByDepartment(projects, college){
    
    if(typeof college !== "string"){
        return {error: "College must be a string"};
    }
    college = college.toLowerCase();
    if(college !== "engineering" && college !== "agriculture"){
        return {error: "Unknown college"};
    }
    
    return projects.filter(project => project.college.toLowerCase() === college)
}

function getCollegeFunding(projects, college){
    const selected = getProjectsByDepartment(projects, college);
    if(!Array.isArray(selected)){
        return selected;
    }

   return getProjectsFunding(selected);
}

function getCollegeReport(projects, college){
    const collegeProjects = getProjectsByDepartment(projects, college);
    if(!Array.isArray(collegeProjects)){
        return collegeProjects;
    }
    const collegeFunding = getProjectsFunding(collegeProjects);
    const matching = collegeProjects.length;
    
    return {
        college, 
        matching,
        collegeFunding
    };
};
module.exports = { getActiveProjects,  getProjectsFunding, 
    getProjectsReport, getProjectsByName,
    getProjectsByDepartment, getCollegeFunding,
    getCollegeReport

    }; 

