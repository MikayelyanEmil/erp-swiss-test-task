export default class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        // this._render();
    }

    _render() {
        // const app = document.getElementById('app');
        // app.innerHTML = '';
        // app.appendChild(this.render());
    }

    render() {
        
    }
}