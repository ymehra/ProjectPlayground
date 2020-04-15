// const square = function (x) {
//    return x * x
// }

// const square = (x) => {
//    return x * x
// }

// const square = (x) => x*x

const event = {
   name: 'Birthday Party',
   guestList: ['Yash', 'Aaron', 'Tommy'],
   printGuestList() {
      console.log('Guest List for ' + this.name)
      this.guestList.forEach((guest) => {
         console.log(guest + ' is attending ' + this.name)
      })
   }
}

event.printGuestList()
