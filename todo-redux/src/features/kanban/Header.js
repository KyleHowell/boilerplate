import React from 'react';
import styles from './Kanban.module.css';

export default class Header extends React.Component {
  render() {
    return (
      <>
      <div className={styles.header}>
        <div className={styles.headerButtons}>
          <div className={styles.headerButton}>
            <span class="material-icons md-light">apps</span>
          </div>
          <div className={styles.headerButton}>
            <span class="material-icons md-light">house</span>
          </div>
          <div className={styles.headerButton}>
            <span class="material-icons md-light">dashboard</span>
            <div style={{'font-weight': 800, 'padding': 10}}>Boards</div>
          </div>
          <div className={styles.headerButton}>
            <div style={{'padding-right': 80, 'padding-left': 10}}>Jump to...</div>
            <span class="material-icons md-light">search</span>
          </div>
        </div>
        <img className="trello-logo" src="https://a.trellocdn.com/prgb/dist/images/header-logo-spirit.8835731c276d3777b6ee.gif" alt="logo"/>
        <div className={styles.headerButtons}>
          <div className={styles.headerButton}>
            <span class="material-icons md-light">add</span>
          </div>
          <div className={styles.headerButton}>
            <span class="material-icons md-light">info</span>
          </div>
          <div className={styles.headerButton}>
            <span class="material-icons md-light">doorbell</span>
          </div>
        </div>
      </div>
      <div className={styles.boardHeader}>
        <div className={styles.headerButtons}>
          <div className={styles.boardHeaderButton}>
            <span class="material-icons">dashboard</span>
            <div style={{'font-weight': 400, 'padding': 10}}>Board</div>
            <span class="material-icons">keyboard_arrow_down</span>
          </div>
          <h2>Test</h2>
          <div className={styles.boardHeaderButton}>
            <span class="material-icons">star_border</span>
          </div>
          <h2 style={{color: 'grey'}}>|</h2>
          <div className={styles.boardHeaderButton}>
            <div style={{'padding': '0 10px'}}>Prairie Health
              <span style={{"margin": "0 10px", "background-color": "lightgrey", "border-radius": "15px", "padding": "0 5px"}}>free</span>
            </div>
          </div>
          <h2 style={{color: 'grey'}}>|</h2>
          <div className={styles.boardHeaderButton}>
            <span class="material-icons">people</span>
            <div style={{'padding': 10}}>Team Visible</div>
          </div>
          <h2 style={{color: 'grey'}}>|</h2>
          <div className={styles.boardHeaderButton}>
            <div style={{'padding': 10}}>Invite</div>
          </div>
        </div>
        <div className={styles.headerButtons}>
          <div className={styles.boardHeaderButton}>
            <span class="material-icons">doorbell</span>
            <div style={{'padding': 10}}>Butler</div>
          </div>
          <div className={styles.boardHeaderButton} onClick={() => this.props.onMenuClick()}>
            <span class="material-icons">more_horiz</span>
            <div style={{'padding': 10}}>Show Menu</div>
          </div>
        </div>
      </div>
    </>
    );
  }
}
