/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('AppName.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',
    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },
    // Для кнопок с цифрами
    onClickButton: function (button) {
        var vm = this.getViewModel()
        if(vm.get('buttonPressed') === false){
            vm.set('display', button.text)
            vm.set('buttonPressed', true)
        } else{
            var a = vm.get('display') + +button.text
            vm.set('display', a)
        }
    },
    // Для кнопок операций
    onClickOperationButton: function (button) {
        var vm = this.getViewModel()
        vm.set('operationType', button.operationType)
        vm.set('firstNumber', vm.get('display'))
        vm.set('display', '')
        vm.set('displayTwo', vm.get('firstNumber') + " " + button.text)
    },
    // Кнопка очистки
    onClickClearButton: function (button) {
        var vm = this.getViewModel()
        vm.set('buttonPressed', false)
        vm.set('display', "0")
        vm.set('displayTwo', " ")
        vm.set('firstNumber', 0)
        vm.set('secondNumber', 0)
    },

    onClickEqualsButton: function (button) {
        var vm = this.getViewModel()
        vm.set('secondNumber', vm.get('display'))
        if (vm.get('operationType') !== 0){
            var result;
            if(vm.get('operationType') === 4){
                result = +vm.get('firstNumber') + +vm.get('secondNumber')
                vm.set('display', result)
            }

            if(vm.get('operationType') === 3){
                result = +vm.get('firstNumber') - +vm.get('secondNumber')
                vm.set('display', result)
            }

            if(vm.get('operationType') === 2){
                result = +vm.get('firstNumber') * +vm.get('secondNumber')
                vm.set('display', result)
            }

            if(vm.get('operationType') === 1){
                result = +vm.get('firstNumber') / +vm.get('secondNumber')
                vm.set('display', result)
            }
        }
        vm.set('displayTwo', vm.get('displayTwo') + " " + vm.get('secondNumber') + " " + "=" + " " + result)
        vm.set('buttonPressed', false)
        vm.set('operationType', 0)
        vm.set('textArea', vm.get('textArea') + vm.get('displayTwo') + "\n")
    }
});
