import {Component} from "react";
import '@toast-ui/editor/dist/toastui-editor.css';

class Editor extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const Editor = require('@toast-ui/editor');

        const editor = new Editor({
            el: document.querySelector('#editor'),
            minHeight: '300px',
            height: 'auto',
            width: '10%',
            initialEditType: 'wysiwyg',
            initialValue: this.props.data ?? 'Index Content Here',
            placeholder: 'Index Content Here',
            previewStyle: 'vertical',
            events: {
                change: () => {
                    const data = editor.getMarkdown();
                    this.props.onChange(data)
                }
            }

        });

        this.setState({editor})
    }

    render() {
        return(
            <div id="editor" />
        )
    }
}

export default Editor