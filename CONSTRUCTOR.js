// class Railawayform{
//   constructor(givename,trainno){
//     console.log("Constructor Called.."+ givename +" " + trainno)
//     this.givenname=givename
//     this.no=trainno
//   }
//   submit(){
// alert(this.givenname +  " : ur form is submittwd for train"+  this.no)
//   }
//   cancel(){ 
//     alert(this.givenname +  ": your form is cancelled for train" +  this.no)
//   }
//   // fill(givenname,trainno){
//   //   this.givenname=givenname
//   //   this.no=trainno
//   // }
// }
// // craete a form 
// let nigamform=new Railawayform("hiuhiu",372836)
// // with details
// // nigamform.fill("Nigam",120045)
// let rohanform1= new Railawayform("rohan",23456)
// // rohanform1.fill()
// let rohanform2= new Railawayform("rohan",23466)
// // rohanform2.fill()
// nigamform.submit()
// rohanform1.submit()
// rohanform2.submit()
// rohanform1.cancel()


class Railwayform{
  constructor(givename,trainno,address){
    console.log("Constructor Called.." + givename + " " + trainno)
    this.givenname=givename
    this.no=trainno
    this.address=address
  }
  preview(){
    alert(this.givenname + "your form is submitted for trainno: " + this.no + "and address " + this.address)
  }
  submit(){
alert(this.givenname +  " : ur form is submitted for trainno :"+  this.no)
  }
  cancel(){ 
    alert(this.givenname +  ": your form is cancelled for train for trainno: " +  this.no)
    this.no="___"
  }
}
let nigamform=new Railwayform("nigam",120044,"546 conval 56deg NORTH 36656")
nigamform.submit()
nigamform.preview()
nigamform.cancel()
nigamform.preview()

