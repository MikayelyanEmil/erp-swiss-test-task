import Category from "./Category.js";
import Component from "./Component.js";

export default class Option extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        if (!this.props.dataSub) return;
        if (this.props.selectedOption == this.props.name) this.props.setState({ selectedOption: '' });
        else if (this.props.selectedOption) {
            this.props.setState({ selectedOption: '' });
            setTimeout(() => this.props.setState({ selectedOption: this.props.name }), 0);
        }
        else {
            this.props.setState({ selectedOption: this.props.name });
        }
        this.props.setState({ passOpts: this.props.dataSub });
    }



    render() {
        const listItem = document.createElement('li');
        listItem.className = `category-btn ${this.props.selectedOption && (this.props.selectedOption == this.props.name ? 'active' : 'unactive')} category-index-${this.props.categoryIndex}`
        listItem.dataset.name = this.props.name;
        listItem.dataset.sub = this.props.dataSub;

        let optionHeading;
        if (window.innerWidth < 400) {
            optionHeading = document.createElement(`h${3 + this.props.categoryIndex}`);
            const stringHtml = `${this.props.name}${this.props.selectedOption == this.props.name ?
                `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="#010114"/>
                </svg>`
                : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9L12 15L6 9" stroke="#010114" />
                </svg>`}`;
            optionHeading.insertAdjacentHTML('beforeend', stringHtml);
        } else {
            optionHeading = document.createElement(`h3`);
            const stringHtml = `${this.props.name}
                <svg style={selectedOption == name ? { display: 'block' } : { display: 'none' }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#010114" strokeidth="2" />
                </svg>`;
            optionHeading.insertAdjacentHTML('beforeend', stringHtml);
        }

        optionHeading.onclick = (e) => this.handleClick(e);

        listItem.append(optionHeading);
        return listItem;
    }

}