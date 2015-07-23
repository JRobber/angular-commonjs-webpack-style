export default ngModule => {
	ngModule.factory("LoanCalculator", [function() {
	    var loan = function (durationMonths, yearlyRate, totalAmount, privateInsuraceRate, down) {
	    	this.mpr = yearlyRate/12;
	    	this.periods = durationMonths;
	    	this.apr = yearlyRate;
	    	this.totalDue = totalAmount;
	    	this.payments = [];
	    	this.pmi = privateInsuraceRate;
	    	this.percentDown = down;
	    };

	    loan.prototype.buildMonths = function() {

            // Calculate the monthly payment and round it to 2 decimal places           
            var monthlyPayment = ((this.mpr) / (1 - (Math.pow((1 + (this.apr / 12), -(this.periods))))) * totalDue);
            monthlyPayment = Math.round(monthlyPayment, 2);

            var currentBalance = this.totalDue;
            var cummulativeInterest = 0;
            var cummulativePrincipal = 0;
            // Storage List
            // Loop for amortization term (number of monthly payments)
            for (var j = 0; j < this.periods; j++)
            {
            	var month = {};
                // Calculate monthly cycle
                month.interestDue = currentBalance * interestRate / 12;
                month.principleDue = monthlyPayment - month.interestDue;
                currentBalance = currentBalance - monthlyPrincipal;

                if (j == amortizationTerm - 1 && currentBalance != monthlyPayment)
                {
                    // Adjust the last payment to make sure the final balance is 0
                    monthlyPayment += currentBalance;
                    currentBalance = 0;
                }

                // Reset Date
                month.period = j;
                // Add to cummulative totals
                cummulativeInterest += month.interestDue;
                cummulativePrincipal += monthlyPrincipal;

                
                month.principleDue = Math.round(month.principleDue, 2),                                        
                month.interestDue = Math.round(interestDue, 2),
                month.paymentDue = Math.round(month.principleDue + month.interestDue, 2),
                month.balanceAfterPayment = Math.round(currentBalance, 2),   
                month.cummulativeInterestPaid = Math.round(cummulativeInterest, 2),
                month.cummulativePrincipalPaid = Math.round(currentBalance + cummulativeInterest, 2)
                
				payments.push(month);
            }
        };

        return loan;
	}]);
}