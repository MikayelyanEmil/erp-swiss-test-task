import Component from "./Component.js";
import Category from "./Category.js";

class Option extends Component {
    constructor(props) {
        super(props);
    }

    handleClick(e) {
        if (!this.props.dataSub) return;
        if (this.props.state.selectedOption == this.props.name) {
            console.log('current selected');
            this.props.setState({ selectedOption: '' });
        }
        else if (this.props.state.selectedOption) {
            console.log('other selected');
            this.props.setState({ selectedOption: '' });
            this.props.setState({ selectedOption: this.props.name });
        }
        else {
            console.log('not selected yet');
            this.props.setState({ selectedOption: this.props.name });
        }
        this.props.setState({ passOpts: this.props.dataSub });
    }

    render() {
        const listItem = document.createElement('li');
        listItem.className = `category-btn ${this.props.state.selectedOption && (this.props.state.selectedOption == this.props.name ? 'active' : 'unactive')} category-index-${this.props.state.categoryIndex}`
        listItem.dataset.name = this.props.name;
        listItem.dataset.sub = this.props.dataSub;

        let optionHeading;
        if (window.innerWidth < 400) {
            optionHeading = document.createElement(`h${3 + this.props.state.categoryIndex}`);
            const stringHtml = `${this.props.name}${this.props.state.selectedOption == this.props.name ?
                `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 15L12 9L6 15" stroke="${this.props.state.categoryIndex == 0 ? `white`: `#010114`}"/>
                </svg>`
                : `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 9L12 15L6 9" stroke="#010114" />
                </svg>`}`;
            optionHeading.insertAdjacentHTML('beforeend', stringHtml);
        } else {
            optionHeading = document.createElement(`h3`);
            const stringHtml = `${this.props.name}
                <svg style="${this.props.state.selectedOption == this.props.name ? `display: block` : `display: none`}" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#010114" strokeidth="2" />
                </svg>`;
            optionHeading.insertAdjacentHTML('beforeend', stringHtml);
        }

        optionHeading.onclick = (e) => this.handleClick(e);
        listItem.append(optionHeading);

        if (window.innerWidth < 400 && this.props.state.selectedOption == this.props.name) {
            const category = new Category({ options: this.props.state.passOpts, categoryIndex: this.props.state.categoryIndex + 1 });
            listItem.append(category.render());
        }

        return listItem;
    }

}
export default Option