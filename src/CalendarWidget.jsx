import { createElement, useCallback } from "react";

import { BadgeSample } from "./components/BadgeSample";
import "./ui/CalendarWidget.css";

export function CalendarWidget(props) {
    const { calendarwidgetType, calendarwidgetValue, valueAttribute, onClickAction, style, bootstrapStyle } = props;
    const onClickHandler = useCallback(() => {
        if (onClickAction && onClickAction.canExecute) {
            onClickAction.execute();
        }
    }, [onClickAction]);

    return (
        <BadgeSample
            type={calendarwidgetType}
            bootstrapStyle={bootstrapStyle}
            className={props.class}
            clickable={!!onClickAction}
            defaultValue={calendarwidgetValue ? calendarwidgetValue : ""}
            onClickAction={onClickHandler}
            style={style}
            value={valueAttribute ? valueAttribute.displayValue : ""} />
    );
}
