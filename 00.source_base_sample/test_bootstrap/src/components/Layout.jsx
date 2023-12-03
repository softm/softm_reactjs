import React from "react";
import { Card } from "react-bootstrap";

// import Header from "../Header";

// import "./layout.scss";
// import { renderSideMenu } from "../../common/util/menu";

// import { ZMessage, ZSideBar } from "@zara-ui/react";
import { connect, useSelector } from "react-redux";
// import StatusBar from "../components/StatusBar";
import Loading from './Loading';


const Layout = ({ 
  children,
  account,
  isLoading 
}) => {
  // const showSidePanel = true;
  // const message = useSelector((state) => state.common.message);
  // const userRolesClaims = useSelector((state) => state.login.userRolesClaims);
  // console.log("Layout message", message);

  return (
    <>
      {/* <StatusBar /> */}
      {/* <Header /> */}
      {/* {message?.message && (
        // <ZMessage
        //   variant={message.variant}
        //   message={message.message}
        //   shouldDismiss={message.dismiss}
        // />
      )} */}
      {/* {showSidePanel && (
        <ZSideBar style={{ height: "100%" }} data={userRolesClaims?.roles && renderSideMenu(userRolesClaims.roles)} />
      )} */}
      <Card className="main-body">{children}</Card>
      <Loading loading={isLoading}/>
    </>
  );
};

const mapStateToProps = (state) => ({
  isLoading: state.common.isLoading,    
  account: state.auth.account,
  // isLaneDetailView: state.ui.get('laneDetailView'),
  // listLane: state.gateLane.get('listLane'),
  // listErrInfo:
  //   state.errInfo.get('listErrInfo')
  //     .filter((errInfo) => (!errInfo.resolveAt) && errInfo.laneIndex),
});

export default connect(mapStateToProps)(Layout);