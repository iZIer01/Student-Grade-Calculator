//variables

/*
const courseName = document.getElementById("CourseName").trim()
const assignmentScore = document.getElementById("assigScore").trim()
const assignmentWeight = document.getElementById("assigWeight").trim()
const calcualteButton = document.getElementById("calculateBtn"); 


*/
const courseName = " java script "
const assignmentScore =  70
const assignmentWeight = 10

    const courseDetail = {
        course: courseName,
        score: assignmentScore,
        weight: assignmentWeight,
    
        determineGrade: function(){
            // formula to determine the grade
            const finalGrade = assignmentScore * assignmentWeight
            console.log(finalGrade)
        }
        
    }



courseDetail.determineGrade()