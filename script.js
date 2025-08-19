//variables
const courseName = document.getElementById("CourseName").trim()
const assignmentScore = document.getElementById("assigScore").trim()
const assignmentWeight = document.getElementById("assigWeight").trim()
const calcualteButton = document.getElementById("calculateBtn"); 


calcualteButton.addEventListener("click", ()=>{
    
    const courseDetail = {
        course: courseName.value(),
        score: assignmentScore.value(),
        weight: assignmentWeight.value(),
    
        determineGrade: function(){

        }
        
    }

})

// formula to determine the grade
const finalGrade = assignmentScore * assignmentWeight




