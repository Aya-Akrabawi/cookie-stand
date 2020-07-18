'use restrict'
var hour = 6
var hour2 = 1
var hourarray = []
cityArray = []


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

function headerRow() {
    var tableElement = document.getElementById('cookies-sales-table')
    var headerRowElement = document.createElement('tr')
    var tabelHeader = document.createElement('th')
    tabelHeader.textContent = 'Location Name';
    headerRowElement.appendChild(tabelHeader)

    for (let index = 0; index < hourarray.length; index++) {
        tabelHeader = document.createElement('th')
        tabelHeader.textContent = hourarray[index]
        headerRowElement.appendChild(tabelHeader)
    }
    tabelHeader = document.createElement('th')
    tabelHeader.textContent = 'Daily Location Total'
    headerRowElement.appendChild(tabelHeader)
    tableElement.appendChild(headerRowElement)



    /*var parentElement = document.getElementById('random-hrs')
    var table = document.createElement('table')
    document.createAttribute('class','change')
    var tr = document.createElement('tr')
    var th0 = document.createElement('th')
        th0.textContent = 'Branch'
        tr.append(th0)

    for (var headrow = 0; headrow < hourarray.length; headrow++) {
        var th1 = document.createElement('th')
            th1.textContent = hourarray[headrow]
        tr.append(th1)
        
    }    
    table.appendChild(tr)
    parentElement.appendChild(table)
    var th2 = document.createElement('th')
        th2.textContent = 'Daily Location Total'
        tr.append(th2)*/


}

headerRow()

function FooterRowfc() {
    var tableElement = document.getElementById('cookies-sales-table')
    var footerRowElement = document.createElement('tr')
    var tableRowCell = document.createElement('td')
    tableRowCell.textContent = 'Totals';
    footerRowElement.appendChild(tableRowCell)

    var totals = 0
    for (let index = 0; index < hourarray.length; index++) {
        var hourCell = document.createElement('td')
        var totalCookiesPerHour = 0
        for (let j = 0; j < cityArray.length; j++) {
            totalCookiesPerHour = totalCookiesPerHour + cityArray[j].cookiesPerHour[index]
        }
        totals = totalCookiesPerHour
        hourCell.textContent = totalCookiesPerHour
        footerRowElement.appendChild(hourCell)
    }
    var totalsTableDataCell = document.createElement('td')
    totalsTableDataCell.textContent = totals
    footerRowElement.appendChild(totalsTableDataCell)
    tableElement.appendChild(footerRowElement)



    /*
    var columnSum = []
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
    parentElement.appendChild(table)*/



}

function Sales(cityArray, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerCustomer, hrArray, totalperbranch, cellperhr) {
    var array1 = []
    array1.push(hrArray)
    var array4 = []
    array4.push(cityArray)
    var array2 = []
    array2.push(totalperbranch)
    var array3 = []
    array3.push(cellperhr)

    this.name = name
    this.minHourlyCustomer = minHourlyCustomer
    this.maxHourlyCustomer = maxHourlyCustomer
    this.avgCookiesPerCustomer = avgCookiesPerCustomer
    this.hrArray = array1
    this.cityArray = array4
    this.totalperbranch = array2
    this.total = 0
    this.cellperhr = array3
    console.log(cityArray)


}

Sales.prototype.SetrandNumOfCustomersPerHr = function () {
    for (var index = 0; index < hourarray.length; index++) {
        var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.hrArray.push(Math.floor(this.avgCookiesPerCustomer) * randomly)
        this.total = this.total + (Math.floor(this.avgCookiesPerCustomer) * randomly)
    }

}

Sales.prototype.render = function () {
    var tableElement = document.getElementById('cookies-sales-table')

    var tr = document.createElement('tr')

    var th1 = document.createElement('th')
    th1.textContent = this.cityArray
    tr.append(th1)





    for (var branchRow = 0; branchRow < hourarray.length; branchRow++) {
        var th1 = document.createElement('th')

        th1.textContent = this.hrArray[branchRow + 1]
        tr.append(th1)


    }

    var th1 = document.createElement('th')

    th1.textContent = this.total
    tr.append(th1)

    tableElement.appendChild(tr)


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
    var minHourlyCustomer = event.target.min.value;
    var maxHourlyCustomer = event.target.max.value;
    var avgCookiesPerCustomer = event.target.avg.value;

    var newbranch = new Sales(name, minHourlyCustomer, maxHourlyCustomer, avgCookiesPerCustomer,)

    var tableElement = document.getElementById('cookies-sales-table')

    newbranch.SetrandNumOfCustomersPerHr();
    newbranch.render();
    tableElement.removeChild(tableElement.lastchild)
    cityArray.push(name)
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
FooterRowfc()



