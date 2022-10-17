console.log("hello world");

const getRollNumber = ()=>{
      setTimeout(()=>{
        console.log('API getting roll number');
        let roll_no=[1,2,3,4,5];
        console.log(roll_no);

        setTimeout((rollno)=>{
            const boidata={
                name:"swapnil",
                age:"26",
            }
            console.log(` My roll number is ${rollno}. My name is ${boidata.name} and I am ${boidata.age} year old`);
                      
            setTimeout((name)=>{
                boidata.gender="male";
                console.log(` My roll number is ${rollno}. My name is ${boidata.name} and I am ${boidata.age} year old and my gender is ${boidata.gender}`);  
            },2000,boidata.name);
        },2000,roll_no[1])
      },2000);
}
getRollNumber();

