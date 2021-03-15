import React from 'react';

export default class Sidebar extends React.Component {
  render() {
    const sidebarClass = this.props.visible ? 'sidebar' : 'hidden';
    const closeButtonClass = this.props.visible ? 'closeSidebar' : 'hidden';
    return (
      <div className={sidebarClass}>
        <div className={closeButtonClass} onClick={() => this.props.onClose()}>
          X
        </div>
      </div>
    );
  }
}
