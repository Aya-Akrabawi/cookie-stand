'use restrict'
var hour = 6
var hour2 = 1
var hourarray = []

for (let index = 0; index < 14 ; index++) {
    if (index <6 ){  
    var array = (hour+'am')
       //console.log (array)
       hour++ 
    }else if (index>6){
        var array = (hour2+'pm')
       //console.log (array)
       hour2++
    } else {
        var array = (hour+'pm')
       //console.log (array)
       hour++
    }
    hourarray.push(array)
    
}
//console.log(hourarray)

function headerRow() {
    var parentElement = document.getElementById('random-hrs')
    var table = document.createElement('table')
    document.createAttribute('class','change')
    table.setAttribute ('class','yala')
    var tr = document.createElement('tr')
    var th0 = document.createElement('th')
        th0.textContent = ''
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
        tr.append(th2)

   
}

headerRow()

function FooterRow() {
    var parentElement = document.getElementById('random-hrs')
    var table = document.createElement('table')
    //table.setAttribute ('border','1')
    var tr = document.createElement('tr')
    var th0 = document.createElement('th')
        th0.textContent = 'Total'
        tr.append(th0)

    for (var FooterRow = 0; FooterRow < hourarray.length; FooterRow++) {
        var th1 = document.createElement('th')
        th1.textContent = ''
        tr.append(th1)
        
    }    
    table.appendChild(tr)
    parentElement.appendChild(table)
    var th2 = document.createElement('th')
        th2.textContent = 'Daily Location Total'
        tr.append(th2)

   
}
    
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
    for (var index = 0; index < hourarray.length ; index++) {
        var randomly = Math.floor(Math.random() * (this.maxHourlyCustomer - this.minHourlyCustomer + 1) + this.minHourlyCustomer);
        this.hrArray.push(Math.floor (this.avgCookiesPerCustomer) * randomly)

        this.total=this.total+(Math.floor (this.avgCookiesPerCustomer) * randomly)
        }
    }

   Sales.prototype.render = function() {
        var parentElement = document.getElementById('random-hrs')
        var table = document.createElement('table')

       //table.setAttribute ( "style", 'border: 1px solid blue' )
       //document.getElementById("myDiv").style.border = "thin dotted red";
        var tr = document.createElement('tr')
        
        
        
        var th1 = document.createElement('th')
        th1.textContent = this.name
        tr.append(th1)
        

        for (var branchRow = 0; branchRow < hourarray.length; branchRow++) {
            var th1 = document.createElement('th')
            th1.textContent = ' '
            tr.append(th1)
            //th1.setAttribute ( "style", 'border: 1px solid blue' )

        }  



        table.appendChild(tr)
        parentElement.appendChild(table)

       
    }
   var seattle = new Sales('Seattle', 23, 65, 6.3, [], 0);
    var tokyo = new Sales('Tokyo', 23, 65, 6.3, [], 0);
    var dubai =  new Sales('Dubai', 23, 65, 6.3, [], 0);
    var paris = new Sales('Paris', 23, 65, 6.3, [], 0);
    var lima = new Sales('Lima', 23, 65, 6.3, [], 0);
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
FooterRow()