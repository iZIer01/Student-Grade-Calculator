    //variables

    const calcualteButton = document.getElementById("calculateBtn"); 
    const textResult = document.getElementById("textResult");
    const result = document.getElementById("result");

    calcualteButton.addEventListener("click",()=>{

        const courseName = document.getElementById("CourseName").value.trim()
        const assignmentScore = document.getElementById("assigScore").value
        const assignmentWeight = document.getElementById("assigWeight").value


        showConatiner()

        const courseDetail = {
            course: courseName,
            score: assignmentScore,
            weight: assignmentWeight,

            determineGrade: function(){
                // formula to determine the grade
                const finalGrade = this.score * this.weight
                return finalGrade;
            },
            
            // displaying the grade to the student
            displayGrade: function(){
                const grade = this.determineGrade();

                if(grade > 79){
                    textResult.innerText = "You Achieved An:"
                        result.innerText = "A"
                }else if(grade <= 80 && grade >= 70){
                    textResult.innerText = "You Achieved An:"
                        result.innerText = "B"

                }else if(grade <= 70 && grade >= 60){
                    textResult.innerText = "You Achieved An:"
                        result.innerText = "C"
                }else if(grade <= 60 && grade >=50){
                    textResult.innerText = "You Achieved An:"
                        result.innerText = "D"
                }else{
                    textResult.innerText = "You Achieved An:"
                        result.innerText = "F"
                }
            }
        }

        courseDetail.displayGrade()
    })


    function showConatiner(){
        const resultContainer = document.querySelector(".resultContainer");
        resultContainer.style.display = "flex"
        
        }

