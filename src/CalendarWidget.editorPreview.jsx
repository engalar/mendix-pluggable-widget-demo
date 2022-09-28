import { createElement } from "react";

import { parseInlineStyle } from "@mendix/pluggable-widgets-tools";

import { BadgeSample } from "./components/BadgeSample";

function parentInline(node) {
    // Temporary fix, the web modeler add a containing div, to render inline we need to change it.
    if (node && node.parentElement && node.parentElement.parentElement) {
        node.parentElement.parentElement.style.display = "inline-block";
    }
}

function transformProps(props) {
    return {
        type: props.calendarwidgetType,
        bootstrapStyle: props.bootstrapStyle,
        className: props.className,
        clickable: false,
        style: parseInlineStyle(props.style),
        defaultValue: props.calendarwidgetValue ? props.calendarwidgetValue : "",
        value: props.valueAttribute
    };
}


export function preview(props) {
    return (
        <div ref={parentInline}>
            <BadgeSample {...transformProps(props)}></BadgeSample>
        </div>
    );
}

export function getPreviewCss() {
    return require("./ui/CalendarWidget.css");
}

