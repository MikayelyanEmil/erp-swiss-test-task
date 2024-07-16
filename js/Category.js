import Component from "./Component.js";
import Option from "./Option.js";

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = { selectedOption: '', passOpts: [] };
        this.parent = props.parentElement;
    }

    render() {
        const fragment = document.createDocumentFragment();
        const optionsContainer = document.createElement('div');
        optionsContainer.className = `select-options ${this.state.selectedOption == '' ? 'current' : ''}`;
        optionsContainer.dataset['categoryIndex'] = this.props.categoryIndex;

        const unorderedList = document.createElement('ul');
        unorderedList.className = "active";

        this.props.options.forEach(option => {
            let name = option.name || Object.keys(option)[0];
            let optionElement = new Option({name, dataSub: option[name], state: this.state, setState: this.setState.bind(this) });
            unorderedList.append(optionElement.render());
        });

        optionsContainer.append(unorderedList);
        fragment.append(optionsContainer);

        if (window.innerWidth > 401 && this.state.selectedOption != '') {
            const category = new Category({ options: this.state.passOpts, categoryIndex: this.props.categoryIndex + 1 });
            fragment.append(category.render());
        }
        else if (this.props.categoryIndex == 0 && this.state.selectedOption == '') {
            const image = document.createElement('img');
            image.src = '../assets/image.jpeg';
            image.width = 800;
            image.height = 500;
            fragment.append(image);
        }

        return fragment;
    }
}
export default Category;