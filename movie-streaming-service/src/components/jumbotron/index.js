import React from 'react';
import "./styles/jumbotron.css"
export default function Jumbotron({ children, direction = 'row', ...restProps }) {
  return (
    <div className="item" {...restProps}>
      <div direction={direction}>
      <div className="inner" data-direction={direction} {...restProps}>
        {children}
      </div>
      </div>
    </div>
  );
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <div className="container" {...restProps}>{children}</div>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <div className="pane" {...restProps}>{children}</div>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
  return <h1 className="titleJumbo" {...restProps}>{children}</h1>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <h2 className="subtitle" {...restProps}>{children}</h2>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <img className="img" {...restProps} alt='val'/>;
};
