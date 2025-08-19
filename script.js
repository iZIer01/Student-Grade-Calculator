//variables
const calculateButton = document.getElementById("calculateBtn"); 
const textResult = document.getElementById("textResult");

calculateButton.addEventListener("click", () => {
    const courseName = document.getElementById("CourseName").value.trim();
    const assignmentScore = document.getElementById("assigScore").value;
    const assignmentWeight = document.getElementById("assigWeight").value;

    const courseDetail = {
        course: courseName,
        score: parseFloat(assignmentScore),
        weight: parseFloat(assignmentWeight),

        //trying to validate so i can prevent incorrect values 
        validation:function(){

            if(!this.course||this.score === " " ||this.weight === " "){
                textResult.innerText = "You cant leave the input-felid empty"
                return false;
            }else{
                courseDetail.performCalculation()
            }
        },

        performCalculation:function(){
            const grade = this.score * (this.weight/100);

            if(grade >= 80){
                textResult.innerText = "You Achieved An: A"
            }else if(grade >= 70 && grade <= 80){
                textResult.innerText = "You Achieved An: B"
            }else if(grade >=60 && grade <= 70){
                textResult.innerText = "You Achieved An: C"
            }else if(grade >= 50 && grade <= 60){
                textResult.innerText = "You Achieved An: E"
            }else{
                textResult.innerText = "You Achieved An: F"
            }

        }
        
        
    };
    showContainer()
    courseDetail.validation()

});

function showContainer() {
    const resultContainer = document.querySelector(".resultContainer");
    resultContainer.style.display = "flex";
}



