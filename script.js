//variables
const calcualteButton = document.getElementById("calculateBtn"); 
const textResult = document.getElementById("textResult");

calcualteButton.addEventListener("click", () => {
    const courseName = document.getElementById("CourseName").value.trim();
    const assignmentScore = document.getElementById("assigScore").value;
    const assignmentWeight = document.getElementById("assigWeight").value;

    const courseDetail = {
        course: courseName,
        score: parseFloat(assignmentScore),
        weight: parseFloat(assignmentWeight),

        //trying to validate so i can prevent incorrect values 
        validation:function() {
            if (!this.course) {
                textResult.innerText = "Please fill in the input";
                return false;
            }
        },

        determineGrade: function() {
            // formula to determine the grade
            
        },
        
        
    };

    
});

function showConatiner() {
    const resultContainer = document.querySelector(".resultContainer");
    resultContainer.style.display = "flex";
}



