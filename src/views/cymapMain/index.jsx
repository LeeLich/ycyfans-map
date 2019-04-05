import './index.scss';
import * as React from 'react';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Time from 'components/Time';
import Weather from 'components/Weather';
import CymapStatic from 'components/static';
import EchartChinaMap from 'components/echartComponents/echartChinaMap';
import Hexagon from 'components/cymap/Hexagon';
// import Trips from 'components/cymap/trips';
import SzBuilding from 'components/cymap/SzBuilding';
import FansProportion from 'components/echartComponents/fans-proportion';
import FansIncrease from 'components/echartComponents/fans-increase';
import RegionalRanking from 'components/echartComponents/regional-ranking';
import CareerAnalysis from 'components/echartComponents/career-analysis';
import HotWords from 'components/echartComponents/hot-words';


class CymapMain extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      type: 1,
    };
    // this.changeMap = this.changeMap.bind(this);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  // eslint-disable-next-line consistent-return
  getItem() {
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.type === 1) {
      return (
        <EchartChinaMap key={1} />
      );
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.type === 2) {
      return (
        <Hexagon key={2} />
      );
    }
    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.type === 3) {
      return (
        <SzBuilding key={3} />
      );
    }
  }

  changeMap(parm) {
    console.log(parm);
    if (parm) {
      if (parm === 1) {
        this.setState({
          type: 1,
        });
      }
      if (parm === 2) {
        this.setState({
          type: 2,
        });
      }
      if (parm === 3) {
        this.setState({
          type: 3,
        });
      }
    } else {
      this.setState({
        type: 1,
      });
    }
  }

  render() {
    // const item = this.getItem();
    return (
      <div className="cymap-main">
        <div className="cymap-logo" />
        <div className="cymap-static">
          <CymapStatic />
        </div>
        <div className="TimeAndWeather">
          <Time />
          <Weather />
        </div>
        <div className="cymap-tab">
          <div className="tab-item" title="echart中国" id="echartmap" />
          <div className="tab-item" title="3D热力图" id="heatmap" />
          <div className="tab-item" title="三维城市" id="tripmap" />
        </div>
        <div className="cymap-contain">
          {/* <ReactCSSTransitionGroup
            transitionName="test"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={500}
          >
            {item}
          </ReactCSSTransitionGroup> */}
          <EchartChinaMap />
          {/* <Hexagon /> */}
          {/* <Trips/> */}
          {/* <SzBuilding /> */}
        </div>
        <div className="cymap-left">
          <div className="cymap-left__content">
            <FansProportion />
            <FansIncrease />
          </div>
        </div>
        <div className="cymap-right">
          <div className="cymap-right__content">
            <RegionalRanking />
            <CareerAnalysis />
            <HotWords />
          </div>
        </div>
      </div>
    );
  }
}

export default CymapMain;
