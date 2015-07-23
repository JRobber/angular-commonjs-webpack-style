export default ngModule => {
	ngModule.controller("LoanCalcController", ["LoanCalculator", function(loan) {
		var vm = this;
	    this.amount = 150;
	    this.rate = 5;
	    this.periods = 360;

	    this.onSubmit = function(){
	    	var ln = new loan(vm.periods, vm.rate, vm.amount, 0, 0);
	    	ln.buildMonths();
	    	vm.loan = ln;
	    }
	}]);
}
