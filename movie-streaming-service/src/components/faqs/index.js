import React, { createContext, useContext, useState } from "react";
import "./styles/faqs.css"

const ToggleContext = createContext();

export default function FAQs({children,...restProps}) {
    return <div {...restProps} >{children}</div>
}

FAQs.Container = function FAQsContainer({children, ...restProps}) {
    return <div className="container" {...restProps}>{children}</div>
}

FAQs.Frame = function FAQsFrame({children, ...restProps}) {
    return <div className="frame" {...restProps}>{children}</div>
}

FAQs.Inner = function FAQsInner({children, ...restProps}) {
    return <div className="inner" {...restProps}>{children}</div>
}

FAQs.Title = function FAQsTitle({children, ...restProps}) {
    return <p className="titleFAQs">{children}</p>
}

FAQs.Item = function FAQsItem({children, ...restProps}) {
    const [toggleShow, setToggleShow] = useState(false);
    return (
        <ToggleContext.Provider value={{toggleShow, setToggleShow }}>
            <div className="itemFAQs">{children}</div>
        </ToggleContext.Provider>
    )
}

FAQs.Header = function FAQsHeader({children, ...restProps}) {
    const { toggleShow, setToggleShow} = useContext(ToggleContext);
    return (
        <div className="header" onClick = {() => setToggleShow(!toggleShow)} {...restProps}>
            {children}
            {toggleShow ? (
                <img src="/images/icons/close-slim.png" alt="Close" />
            ) : (
                <img src="/images/icons/add.png" alt="Open" />
            )}
        </div>

    )
}

FAQs.Body = function FAQsBody({children, ...restProps}) {
    const { toggleShow } = useContext(ToggleContext);
    const className = `body ${toggleShow ? 'open' : 'closed'}`;

    return (
        <div className={className} {...restProps}>
            <span>{children}</span>
        </div>
    )
}