require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var popup = require('../../src/index');

znui.react.createApplication({
    render: <div>
        <popup.Dropdown popover={{
					render: <div>123</div>,
					onWindowInsideContainerEvent: function (event, popover){
						return true;
					}
				}} >
            <div>Click Text</div>
        </popup.Dropdown>
        <popup.Dropdown popover={{
                        render: <div>300-300</div>,
                        onWindowInsideContainerEvent: function (event, popover){
                            return true;
                        }
                    }} >
            <div style={{width: 300, height: 300, backgroundColor: 'yellow' }}>Click Text</div>
        </popup.Dropdown>
        <popup.Dropdown popover={{
                        render: <div>300xxx</div>,
                        onWindowInsideContainerEvent: function (event, popover){
                            return true;
                        }
                    }} >
            <div style={{width: 300, height: 300, backgroundColor: 'green' }}>Click Text</div>
        </popup.Dropdown>
        <span data-zr-popup-tooltip="显示数据" style={{backgroundColor: 'red'}}>显示数据</span>
    </div>
});

popup.dialog({
    title: '创建表单',
    closeable: true,
    content: <div>ssss</div>,
    onClose: function (event, dialog){
        console.log(event, dialog);
        //return false;
    }
});

popup.toast.success('加载成功');

popup.alert('提示', '欢迎您光临');

popup.confirm('警告', '确定要删除吗？');

popup.prompt({
    title: '请输入姓名',
    onChange: function (event){
        console.log('姓名: ', event.target.value);
    },
    confirm: function (){
        //return false;
    }
});


var loader = popup.loader.loading('Loading');
popup.notifier.success('加载成功...');
popup.notifier.error('删除失败');
popup.notifier.warning('警告');
popup.notifier.info('提示');


setTimeout(()=>popup.loader.close(), 2000);