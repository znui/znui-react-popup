require('znui-react');
require('../../src/index.less');
require('./index.less');
var React = znui.React || require('react');
var popup = require('../../src/index');

znui.react.createApplication({
    render: <div>
        <input type="text" />
        <popup.Dropdown popoverRender={()=><div>123</div>} >
            <div>Click Text</div>
        </popup.Dropdown>
        <popup.Dropdown popoverRender={()=><div>300-300</div>} >
            <div style={{width: 300, height: 300 }}>Click Text</div>
        </popup.Dropdown>
        <popup.Dropdown popoverRender={()=><div>300xxx</div>} >
            <div style={{width: 300, height: 300 }}>Click Text</div>
        </popup.Dropdown>
    </div>
});