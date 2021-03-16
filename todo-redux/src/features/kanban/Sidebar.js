import React from 'react';
import styles from './Kanban.module.css';

export default class Sidebar extends React.Component {
  render() {
    const sidebarClass = this.props.visible ? 'sidebar' : 'hidden';
    const closeButtonClass = this.props.visible ? 'closeSidebar' : 'hidden';
    return (
      <div className={sidebarClass}>
        <div className={closeButtonClass} onClick={() => this.props.onClose()}>
          <span class="material-icons">close</span>
        </div>
        <h2 className="menu">Menu</h2>
        <span className="seperator">_____________________________________</span>
        <div className="sidebar-item">
          <span class="material-icons">dashboard</span>
          <h2>About this board</h2>
        </div>
        <div className="sidebar-description">Add a descriptionto your board</div>
        <div className="sidebar-item">
          <span class="material-icons">developer_board</span>
          <h2>Change Background</h2>
        </div>
        <div className="sidebar-item">
          <span class="material-icons">search</span>
          <h2>Search Cards</h2>
        </div>
        <div className="sidebar-item">
          <span class="material-icons">toll</span>
          <h2>Stickers</h2>
        </div>
        <div className="sidebar-item">
          <span class="material-icons">more_horiz</span>
          <h2>More</h2>
        </div>
        <span className="seperator">_____________________________________</span>
        <div className="sidebar-item">
          <span class="material-icons">doorbell</span>
          <h2>Butler</h2>
        </div>
        <div className="sidebar-description">Automate cards are more...</div>
        <span className="seperator">_____________________________________</span>
        <div className="sidebar-item">
          <span class="material-icons">upload</span>
          <h2>Power Ups</h2>
        </div>
        <div className="sidebar-description">Google Drive and more...</div>
        <div className="sidebar-item">
          <div className={styles.boardHeaderButton}>
            <span class="material-icons">exposure_plus_1</span>
          </div>
          <div style={{'color': '#5e6c84', 'padding-top': 5, 'font-weight': 500}}>Add power up</div>
        </div>
        <div className="sidebar-item">
          <div className="powerup">
            <span class="material-icons">upload</span>
          </div>
          <div className="powerup-text">
            <h2>Get Unlimited Power Ups</h2>
            <p>Need more than one Power-Up per board? Go unlimited with Business class!</p>
          </div>
        </div>
      </div>
    );
  }
}
