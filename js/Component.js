export default class Component {
    constructor(props = {}) {
        this.props = props;
        this.state = {};
    }

    setState(newState) {
        this.state = { ...this.state, ...newState };
        this._render();
    }

    _render() {
        // this.parent.innerHTML = '';  
        // this.parent.append(this.render());
        const container = document.getElementsByClassName('main-category-block')[0];
        const startPoint = document.querySelector(`[data-category-index="${this.props.categoryIndex}"]`)
        while (startPoint.nextSibling) {
          container.removeChild(startPoint.nextSibling);
        }
        container.removeChild(startPoint);
        container.append(this.render())
    }

    render() {

    }
}