import { DatePicker } from "antd";
import { useCallback, createElement } from "react";

import "./ui/CalendarWidget.css";
import "antd/dist/antd.css";

export function CalendarWidget(props) {
    const { valueAttribute, onClickAction, style } = props;
    const onClickHandler = useCallback(
        value => {
            valueAttribute.setValue(value.toDate());
            if (onClickAction && onClickAction.canExecute) {
                onClickAction.execute();
            }
        },
        [onClickAction]
    );

    return (
        <DatePicker
            value={valueAttribute ? valueAttribute.rawValue : undefined}
            onChange={onClickHandler}
            className={props.class}
            style={style}
        ></DatePicker>
    );
}
