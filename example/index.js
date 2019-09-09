var React = require('react');
var ReactDOM = require('react-dom');
var createClass = require('create-react-class');
require('../../znui-react/index.all.js');
znui.react.fixCreateReactClass(React, createClass);
require('../src/index.js');
require('./index.less');
ReactDOM.render(
    <div>
        <input type="text" />
    </div>,
    document.getElementById('container'),
);

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
})


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