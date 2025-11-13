let GoToGoa =(Success,Failure) =>
{
    let Acc_Bal = 80000
    if(Acc_Bal>=15000)
    {
        Success("Go and Enjoy")
    }
    else
    {
        Failure("Trip Cancel")
    }
}

GoToGoa((msg) =>{console.log(msg)} , (err) =>{console.log(err)}) 