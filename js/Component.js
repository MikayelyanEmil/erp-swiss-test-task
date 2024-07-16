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
        const startPoint = document.querySelector(`[data-category-index="${this.props.categoryIndex}"]`)
        const container = window.innerWidth > 401 ? 
            document.getElementsByClassName('main-category-block')[0] :
            startPoint.parentElement;
        while (startPoint.nextSibling) {
          container.removeChild(startPoint.nextSibling);
        }
        container.removeChild(startPoint);
        container.append(this.render())
    }

    render() {

    }
}