import { Component, createElement } from "react";

import { BadgeSample } from "./components/BadgeSample";
import "./ui/TextBox.css";

export default class TextBox extends Component {

    constructor(props) {
        super(props);

        this.onClickHandler = this.onClick.bind(this);
    }

    render() {
        return (
            <BadgeSample
                type={this.props.textboxType}
                bootstrapStyle={this.props.bootstrapStyle}
                className={this.props.class}
                clickable={!!this.props.onClickAction}
                defaultValue={this.props.textboxValue ? this.props.textboxValue : ""}
                onClickAction={this.onClickHandler}
                style={this.props.style}
                value={this.props.valueAttribute ? this.props.valueAttribute.displayValue : ""} />
        );
    }

    onClick() {
        if (this.props.onClickAction && this.props.onClickAction.canExecute) {
            this.props.onClickAction.execute();
        }
    }
}
