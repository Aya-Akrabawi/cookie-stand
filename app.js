'use restrict'
var hour = 6
var hour2 = 1
var hourarray = []
var AllLocations = []


for (let index = 0; index < 14; index++) {
    if (index < 6) {
        var array = (hour + 'am')
        hour++
    } else if (index > 6) {
        var array = (hour2 + 'pm')
        hour2++
    } else {
        var array = (hour + 'pm')
        hour++
    }
    hourarray.push(array)

}

var forTable = document.getElementById('forTable')
var tableElement = document.createElement('table')
tableElement.setAttribute('id' , 'id-table')
forTable.appendChild(tableElement)
    
    


function headerRow() {
    var headerRowElement = document.createElement('tr')
    tableElement.appendChild(headerRowElement)
    var tabelHeader = document.createElement('th')
    headerRowElement.appendChild(tabelHeader)
    tabelHeader.textContent = 'Location Name';

    for (let index = 0; index < hourarray.length; index++) {
        var tabelHeader1 = document.createElement('th')
        tabelHeader1.textContent = hourarray[index]
        headerRowElement.appendChild(tabelHeader1)
    }
    var tabelHeader2 = document.createElement('th')
    tabelHeader2.textContent = 'Daily Location Total'
    headerRowElement.appendChild(tabelHeader2)
    }

    

headerRow()


function FooterRowfc() {
    var footerRowElement = document.createElement('tr')
    tableElement.appendChild(footerRowElement)
    var tableRowCell = document.createElement('td')
    footerRowElement.appendChild(tableRowCell)
    tableRowCell.textContent = 'Totals';    

    var totals = 0
    for (let index = 0; index < hourarray.length; index++) {
        var hourCell = document.createElement('td')
        footerRowElement.appendChild(hourCell)
        var totalCookiesPerHour = 0
        for (let j = 0; j < AllLocations.length; j++) {
            totalCookiesPerHour = totalCookiesPerHour + AllLocations[j].hrArray[index]
            
        }
        totals = totals + totalCookiesPerHour
        hourCell.textContent = totalCookiesPerHour
    }
    var totalsTableDataCell = document.createElement('td')
    footerRowElement.appendChild(totalsTableDataCell)
    totalsTableDataCell.textContent = totals
    



    
    /*var columnSum = []
    for (let index = 1; index <= hourarray.length; index++) {
        columnSum.push(seattle.hrArray[index] + tokyo.hrArray[index] + dubai.hrArray[index] + paris.hrArray[index] + lima.hrArray[index] )
        
    }
    columnSum.push(seattle.total + tokyo.total + dubai.total + paris.total + lima.total )
    
    var parentElement = document.getElementById('random-hrs')
    var table = document.createElement('table')
    var tr = document.createElement('tr')
    var th0 = document.createElement('th')
        th0.textContent = 'Total'
        tr.append(th0)
    for (var FooterRow = 0; FooterRow < hourarray.length+1; FooterRow++) {
        var th1 = document.createElement('th')
            th1.textContent = columnSum[FooterRow]
        tr.append(th1)
        
    }    
    table.appendChild(tr)
    parentElement.appendChild(table)
*/


}

function Sales(cityArray, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerCustomer) {
    this.cityArray = cityArray
    this.minHourlyCustomer = minHourlyCustomer
    this.maxHourlyCustomer = maxHourlyCustomer
    this.avgCookiesPerCustomer = avgCookiesPerCustomer

    var total = 0
    this.total = total
    var hrArray = []
    this.hrArray=hrArray


    AllLocations.push(this)
    //console.log(AllLocations)

}

Sales.prototype.SetrandNumOfCustomersPerHr = function () {
    var total= 0
    for (var index = 0; index < hourarray.length; index++) {
        var randomNum = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        var multiply = Math.floor(randomNum*this.avgCookiesPerCustomer)
        total = total + multiply
        this.hrArray.push(multiply)
        this.total = total 
        


        /*var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.hrArray.push(Math.floor(this.avgCookiesPerCustomer) * randomly)
        this.total = this.total + (Math.floor(this.avgCookiesPerCustomer) * randomly)
        console.log(this.hrArray)*/

    }
}

Sales.prototype.render = function () {

    var tr5 = document.createElement('tr')
    tableElement.appendChild(tr5)
    var th7 = document.createElement('td')
    tr5.append(th7)
    th7.textContent = this.cityArray
    for (var branchRow = 0; branchRow < hourarray.length; branchRow++) {
        var aya = document.createElement('td')
        aya.textContent = this.hrArray[branchRow]
        tr5.append(aya)
    }
    var th2 = document.createElement('td')
    th2.textContent = this.total
    tr5.append(th2)
}

var seattle = new Sales('Seattle', 23, 65, 6.3);
var tokyo = new Sales('Tokyo', 23, 65, 6.3);
var dubai = new Sales('Dubai', 23, 65, 6.3);
var paris = new Sales('Paris', 23, 65, 6.3);
var lima = new Sales('Lima', 23, 65, 6.3);

var addRow = document.getElementById("addRow")
addRow.addEventListener('submit', function () {
    event.preventDefault();

    var name = event.target.branchname.value;
    var minHourlyCustomer = Number (event.target.min.value);
    var maxHourlyCustomer = Number (event.target.max.value);
    var avgCookiesPerCustomer = Number (event.target.avg.value);

    var newbranch = new Sales(name, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerCustomer,)

    var tableElement1 = document.getElementById('id-table')

    
    console.log('tableElement '+ tableElement1.rows)

    tableElement.deleteRow(tableElement1.rows.length-1)
    AllLocations.push(newbranch)
    console.log(newbranch)
    newbranch.SetrandNumOfCustomersPerHr();
    newbranch.render();
    FooterRowfc()
});


seattle.SetrandNumOfCustomersPerHr()
seattle.render()
tokyo.SetrandNumOfCustomersPerHr()
tokyo.render()
dubai.SetrandNumOfCustomersPerHr()
dubai.render()
paris.SetrandNumOfCustomersPerHr()
paris.render()
lima.SetrandNumOfCustomersPerHr()
lima.render()
//console.log('totalpercolumn  '+totalpercolumn)

FooterRowfc()



Lima.SetrandNumOfCustomersPerHr()
Lima.render()