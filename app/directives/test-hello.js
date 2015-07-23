export default ngModule => {
    ngModule.directive('testHello', () => {
    	require('./test-hello.scss');
        return {
            restrict: 'E',
            scope: {},
            template: require('./test-hello.html'),
            controllerAs: 'vm',
            controller: function() {
                var vm = this;

                vm.greeting = 'Hello Webpack';
            }
        }
    })
}
