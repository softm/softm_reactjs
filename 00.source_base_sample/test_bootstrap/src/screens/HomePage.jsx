import React, { useState } from 'react';
import {
  Row,
  Button,
} from 'react-bootstrap';
import { Logger } from '../utils';

const Log = Logger.create('HomePage');
function HomePage() {
  return (
    <div>
      <div className="main-body card">
        <div className="panel-block">
            <div className="panel-block-head">
              <div className="panel-block-icon"><img width="16" height="16" alt="ZIcon" src={require("../assets_tiot/img/icons/default-icon.svg")}/></div>
              <div className="panel-block-heading">Home</div>
              <div className="panel-block-actions"></div>
            </div>
            <div className="panel-block-content">
              <div className="style_container__2sH-P">
                  <div className="style_groupPadding__P_FDC">
                    <div className="dash-content no-padding">
                        <div className="group-link">
                          <div className="col-md-12 dashboard-group-title">
                              <div className="nav-title row"><span>Statics &amp; Business Insight</span><i className="nav-icon"><img src={require("../assets_tiot/img/icons/reporting.svg")} width="16px" height="16px" alt="ZIcon"/></i></div>
                          </div>
                        </div>
                        <div className="dash-box style_groupMenu__2Oj_F">
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/statics">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/job_cycle-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Job Cycle</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/statics/scheduler">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/job_cycle-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Job Cycle Schedule</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/statics/jobBorder">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/job_cycle-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Job Border</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/statics/rtgBorder">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/job_cycle-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>RTG Border</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/statics/stsBorder">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/job_cycle-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>STS Border</h3>
                                </span>
                              </a>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="style_groupPadding__P_FDC">
                    <div className="dash-content no-padding">
                        <div className="group-link">
                          <div className="col-md-12 dashboard-group-title">
                              <div className="nav-title row"><span>Monitoring</span><i className="nav-icon"><img src={require("../assets_tiot/img/icons/yardreport.svg")} width="16px" height="16px" alt="ZIcon"/></i></div>
                          </div>
                        </div>
                        <div className="dash-box style_groupMenu__2Oj_F">
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/monitoring/system">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/system_monitoring-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>System Monitoring</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/monitoring/device">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/system_monitoring-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Device Monitoring</h3>
                                </span>
                              </a>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="style_groupPadding__P_FDC">
                    <div className="dash-content no-padding">
                        <div className="group-link">
                          <div className="col-md-12 dashboard-group-title">
                              <div className="nav-title row"><span>Management</span><i className="nav-icon"><img src={require("../assets_tiot/img/icons/rolemgnt.svg")} width="16px" height="16px" alt="ZIcon"/></i></div>
                          </div>
                        </div>
                        <div className="dash-box style_groupMenu__2Oj_F">
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/management/groups">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/groups-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Groups</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/management/devices">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/devices-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Devices</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/management/equipments">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/equipments-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Equipments</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/management/auditlogs">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/audit_logs-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Audit Logs</h3>
                                </span>
                              </a>
                          </div>
                        </div>
                    </div>
                  </div>
                  <div className="style_groupPadding__P_FDC">
                    <div className="dash-content no-padding">
                        <div className="group-link">
                          <div className="col-md-12 dashboard-group-title">
                              <div className="nav-title row"><span>Admin</span><i className="nav-icon"><img src={require("../assets_tiot/img/icons/usermgnt.svg")} width="16px" height="16px" alt="ZIcon"/></i></div>
                          </div>
                        </div>
                        <div className="dash-box style_groupMenu__2Oj_F">
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/admin/commoncode">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/common_code-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Common Code</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/admin/devicemodel">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/device_model-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Device Model</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/admin/equipmentmodel">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/equipment_model-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Equipment Model</h3>
                                </span>
                              </a>
                          </div>
                          <div className="dash-icon-box no-padding  col-md-6">
                              <a href="/admin/firmwares">
                                <span>
                                    <div className="module-block-icon"><img src={require("../assets_tiot/img/icons/firmwares-panel.svg")} className="image" alt="ZIcon"/><img src={require("../assets_tiot/img/icons/default-icon-hover.svg")} className="image hover" alt="ZIcon"/></div>
                                    <h3>Firmwares</h3>
                                </span>
                              </a>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        <div></div>
      </div>      
    </div>
  );
}


export default HomePage;
