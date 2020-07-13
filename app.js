'use restrict'
var workinghrs = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm']
function Sales(name, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerCustomer, hrArray, total ){
    var array1 = []
    array1.push(hrArray)
    this.name = name
    this.minHourlyCustomer = minHourlyCustomer
    this.maxHourlyCustomer = maxHourlyCustomer
    this.avgCookiesPerCustomer = avgCookiesPerCustomer
    this.hrArray= array1
    this.total = total
}
Sales.prototype.SetrandNumOfCustomersPerHr = function (){
    for (var index = 0; index < workinghrs.length ; index++) {
        var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.hrArray.push(Math.floor (this.avgCookiesPerCustomer) * randomly)

        this.total=this.total+(Math.floor (this.avgCookiesPerCustomer) * randomly)
        console.log(this.total)
    }
    }

    Sales.prototype.render = function() {
        var parentElement = document.getElementById('random-hrs')
        var article = document.createElement('article')
        parentElement.appendChild(article)

        var branch = document.createElement('strong')
        article.appendChild(branch)
        branch.textContent = this.name

        var ul = document.createElement('ul')
        article.appendChild(ul)
        
        
        for (var hrs = 0; hrs < 14; hrs++) {
            var li = document.createElement("li")
            li.textContent = workinghrs[hrs] + ':   ' + this.hrArray[hrs+1] + "   cookies"
            ul.appendChild(li)
        }
        li.textContent = 'Total:   ' +  this.total + "   cookies"
    }

    var seattle = new Sales('Seattle', 23, 65, 6.3, [], 0);
    var tokyo = new Sales('Tokyo', 23, 65, 6.3, [], 0);
    var dubai =  new Sales('Dubai', 23, 65, 6.3, [], 0);
    var paris = new Sales('Paris', 23, 65, 6.3, [], 0);
    var lima = new Sales('Lima', 23, 65, 6.3, [], 0);
seattle.SetrandNumOfCustomersPerHr()
seattle.render()
/tokyo.SetrandNumOfCustomersPerHr()
tokyo.render()
dubai.SetrandNumOfCustomersPerHr()
dubai.render()
paris.SetrandNumOfCustomersPerHr()
paris.render()
lima.SetrandNumOfCustomersPerHr()
lima.render()



/*var hour = 6
var hour2 = 1
var hourarray = []
console.log(h)
for (let index = 0; index < 14 ; index++) {
    if (index <6 ){  
    var array = (hour+'am')
       console.log (array)
       hour++ 
    }else if (index>6){
        var array = (hour2+'pm')
       console.log (array)
       hour2++
    } else {
        var array = (hour+'pm')
       console.log (array)
       hour++
    }
}
console.log(array[])*/