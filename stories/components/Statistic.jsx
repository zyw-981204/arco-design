import React, { Component } from 'react';
import { Statistic } from '@self';

class Demo extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Statistic
          style={{ width: 300 }}
          title="Feedback"
          precision={2}
          groupSeparator
          value={1300000}
          prefix="哈哈"
          suffix="%"
          countUp
        />
        <Statistic style={{ width: 200 }} title="Rate" value={50} suffix="/ 100" countUp />
        <Statistic
          style={{ marginLeft: 20 }}
          title="Time"
          value={Date.now()}
          format="YYYY/MM/DD HH:mm:ss"
        />
      </div>
    );
  }
}

export default Demo;
