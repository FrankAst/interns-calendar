import React from 'react';

import { addEventListener, removeEventListener } from 'consolidated-events';

const defaultProps = {
  children: <span />,
  onOutsideClick() {},
};

export default class OutsideClickHandler extends React.Component {
  constructor(...args) {
    super(...args);

    this.onOutsideClick = this.onOutsideClick.bind(this);
    this.setChildNodeRef = this.setChildNodeRef.bind(this);
  }

  componentDidMount() {
    // `capture` flag is set to true so that a `stopPropagation` in the children
    // will not prevent all outside click handlers from firing - maja
    this.clickHandle = addEventListener(document, 'click', this.onOutsideClick, { capture: true });
  }

  componentWillUnmount() {
    if (this.clickHandle) {
      removeEventListener(this.clickHandle);
    }
  }

  onOutsideClick(e) {
    const { onOutsideClick } = this.props;
    const { childNode } = this;
    const isDescendantOfRoot = childNode && childNode.contains(e.target);
    if (!isDescendantOfRoot) {
      onOutsideClick(e);
    }
  }

  setChildNodeRef(ref) {
    this.childNode = ref;
  }

  render() {
    return <div ref={this.setChildNodeRef}>{this.props.children}</div>;
  }
}

OutsideClickHandler.defaultProps = defaultProps;
