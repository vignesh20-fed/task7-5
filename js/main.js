const employees2 = [
				  { 
				  name: 'David Carlson', 
				  age: 30 
				  },
				  {
				  name: 'John Cena', 
				  age: 34
				  },
				  { 
				  name: 'Mike Sheridan',
				  age: 25 
				  },
				  { 
				  name: 'John Carte', 
				  age: 50 
				  }
				];

			const employe = employees2.filter(function (employee) {
			  return employee.name.indexOf('John') > -1;
			});
			console.log(employe);
			document.write("<br>",	JSON.stringify(employe));