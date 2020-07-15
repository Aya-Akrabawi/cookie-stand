'use restrict'
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
var workinghrs = ['06am', '07am', '08am', '09am', '10am', '11am', '12pm', '01pm', '02pm', '03pm', '04pm', '05pm', '06pm', '07pm']
var seattle = {
    name: 'Seattle', 
    minHourlyCustomer: 23,
    maxHourlyCustomer: 65,
    avgCookiesPerCustomer: 6.3,
    array1: [],
    total: 0,
    SetrandNumOfCustomersPerHr: function () {
    for (var index = 0; index < workinghrs.length ; index++) {
        var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.array1.push(Math.floor (this.avgCookiesPerCustomer) * randomly)
        this.total=this.total+randomly
    }
    },
    render: function(){
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
            li.textContent = workinghrs[hrs] + ':   ' + this.array1[hrs] + "   cookies"
            ul.appendChild(li)
        }
        li.textContent = 'Total:   ' +  this.total + "   cookies"
    },



}
seattle.SetrandNumOfCustomersPerHr()
seattle.render()

var Tokyo = {
    name: 'Tokoyo', 
    minHourlyCustomer: 3,
    maxHourlyCustomer: 24,
    avgCookiesPerCustomer: 1.2,
    array1: [],
    total: 0,
    SetrandNumOfCustomersPerHr: function () {
    for (var index = 0; index < workinghrs.length ; index++) {
        var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.array1.push(Math.floor (this.avgCookiesPerCustomer) * randomly)
        this.total=this.total+randomly
    }
    },
    render: function(){
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
            li.textContent = workinghrs[hrs] + ':   ' + this.array1[hrs] + "   cookies"
            ul.appendChild(li)
        }
        li.textContent = 'Total:   ' +  this.total + "   cookies"
    },



}
Tokyo.SetrandNumOfCustomersPerHr()
Tokyo.render()




var Dubai = {
    name: 'Dubai', 
    minHourlyCustomer: 11,
    maxHourlyCustomer: 38,
    avgCookiesPerCustomer: 3.7,
    array1: [],
    total: 0,
    SetrandNumOfCustomersPerHr: function () {
    for (var index = 0; index < workinghrs.length ; index++) {
        var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.array1.push(Math.floor (this.avgCookiesPerCustomer) * randomly)
        this.total=this.total+randomly
    }
    },
    render: function(){
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
            li.textContent = workinghrs[hrs] + ':   ' + this.array1[hrs] + "   cookies"
            ul.appendChild(li)
        }
        li.textContent = 'Total:   ' +  this.total + "   cookies"
    },



}
Dubai.SetrandNumOfCustomersPerHr()
Dubai.render()



var paris = {
    name: 'Paris', 
    minHourlyCustomer: 20,
    maxHourlyCustomer: 38,
    avgCookiesPerCustomer: 2.3,
    array1: [],
    total: 0,
    SetrandNumOfCustomersPerHr: function () {
    for (var index = 0; index < workinghrs.length ; index++) {
        var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.array1.push(Math.floor (this.avgCookiesPerCustomer) * randomly)
        this.total=this.total+randomly
    }
    },
    render: function(){
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
            li.textContent = workinghrs[hrs] + ':   ' + this.array1[hrs] + "   cookies"
            ul.appendChild(li)
        }
        li.textContent = 'Total:   ' +  this.total + "   cookies"
    },



}
paris.SetrandNumOfCustomersPerHr()
paris.render()





var Lima = {
    name: 'Lima', 
    minHourlyCustomer: 20,
    maxHourlyCustomer: 38,
    avgCookiesPerCustomer: 2.3,
    array1: [],
    total: 0,
    SetrandNumOfCustomersPerHr: function () {
    for (var index = 0; index < workinghrs.length ; index++) {
        var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.array1.push(Math.floor (this.avgCookiesPerCustomer) * randomly)
        this.total=this.total+randomly
    }
    },
    render: function(){
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
            li.textContent = workinghrs[hrs] + ':   ' + this.array1[hrs] + "   cookies"
            ul.appendChild(li)
        }
        li.textContent = 'Total:   ' +  this.total + "   cookies"
    },



}
Lima.SetrandNumOfCustomersPerHr()
Lima.render()
// Done with Lab 06..