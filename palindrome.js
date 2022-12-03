   let bag="";
    let bag1=""+num;
  let N=num;
   
    for(let i=bag1.length-1;i>=0;i--)
    {
        bag=bag+bag1[i];
    }
    if(bag1==bag){
    console.log("Yes");
    }
    else{
        console.log("No");
    }