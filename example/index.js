require('znui-react');
var React = require('react');
var ReactDOM = require('react-dom');
var popup = require('../src/index.js');
require('../src/index.less');
require('./index.less');
console.log(popup);
ReactDOM.render(
    <div>
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
    </div>,
    document.getElementById('container'),
);

/*
znui.react.dialog({
    title: 'xx',
    closeable: true,
    content: <form className="role-form">
        <div className="form-item"><span className="title">Display Name: </span><input name="displayName" type="text" /></div>
        <div className="form-btn" onClick={(event)=>this.__submitUpdateRole(event, value.name)}>Update Role DisplayName</div>
    </form>
})

znui.react.dialog({
    title: 'xxbbbb',
    closeable: true,
    content: <form className="role-form">
        <div className="form-item"><span className="title">Display Name: </span><input name="displayName" type="text" /></div>
        <div className="form-btn" onClick={(event)=>this.__submitUpdateRole(event, value.name)}>Update Role DisplayName</div>
    </form>
})*/


console.log(znui.react.tooltip.render)


/*
var _modal = znui.react.modal.create(<div style={{width: 100, height: 100, backgroundColor: '#AAA'}}>
    A
</div>, {
    class: 'modal-middle modal-overlay',
    
});

var _modal = znui.react.modal.create(<div style={{width: 100, height: 100, backgroundColor: '#ddd'}}>
    B
</div>, {
    class: 'modal-middle modal-overlay',
    
});

var _modal = znui.react.modal.create(<div style={{width: 100, height: 100, backgroundColor: '#97a'}}>
    C
</div>, {
    class: 'modal-middle modal-overlay',
    
});

var _modal = znui.react.modal.create(<div style={{width: 100, height: 100, backgroundColor: '#fd4'}}>
    D
</div>, {
    class: 'modal-middle modal-overlay',
    
});

var _modal = znui.react.modal.create(<div style={{width: 100, height: 100, backgroundColor: '#fff'}}>
    E
</div>, {
    class: 'modal-middle modal-overlay',
    
});

var _modal = znui.react.modal.create(<div style={{width: 100, height: 100, backgroundColor: 'blur'}}>
    F
    <input type="text" />
</div>, {
    class: 'modal-middle modal-overlay',
    
});

setTimeout(()=>znui.react.modal.closeAll(5000), 5000);

*/