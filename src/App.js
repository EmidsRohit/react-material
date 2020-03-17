import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Divider from "@material-ui/core/Divider";
import InputText from "./lib/InputText";
import BuildIcon from "@material-ui/icons/Build";
import Apartment from "@material-ui/icons/Apartment";
import PeopleAlt from "@material-ui/icons/PeopleAlt";
import CreateNewFolderIcon from "@material-ui/icons/CreateNewFolder";
import OpacityIcon from "@material-ui/icons/Opacity";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DeviceHubIcon from "@material-ui/icons/DeviceHub";
import PhonelinkSetupIcon from "@material-ui/icons/PhonelinkSetup";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Select from "./lib/Select";
import LeftPanel from "./components/LeftPanel";
import "./App.css";

const menus = [
  { name: "Endpoints", icon: <Apartment fontSize="small" /> },
  { name: "Polpulation", icon: <PeopleAlt fontSize="small" /> },
  { name: "Enrollment", icon: <CreateNewFolderIcon fontSize="small" /> },
  { name: "Dropout", icon: <OpacityIcon fontSize="small" /> },
  { name: "Designs", icon: <DashboardIcon fontSize="small" /> },
  { name: "Opertaional Costs", icon: <DeviceHubIcon fontSize="small" /> },
  { name: "Market Access", icon: <AssignmentIndIcon fontSize="small" /> },
  { name: "Setup", icon: <PhonelinkSetupIcon fontSize="small" /> }
];

export default function App() {
  const [activeMenu, setActiveMenu] = useState("Enrollment");
  const onChangeMenu = name => {
    setActiveMenu(name);
  };
  return (
    <Grid container>
      <Grid className="left-panel" item xs={12} sm={3} md={2}>
        <LeftPanel
          menus={menus}
          activeMenu={activeMenu}
          onChangeMenu={onChangeMenu}
        />
      </Grid>
      <Grid className="right-panel" item xs={12} sm={9} md={10}>
        <ExpansionPanel square expanded={true}>
          <ExpansionPanelSummary
            expandIcon={<MoreVertIcon />}
            aria-controls="panel1d-content"
            id="panel1d-header"
          >
            <Typography>OS Adaptive - With SSR</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container spacing={1}>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText label="Name" />
                  </Grid>
                  <Grid item md={6} sm={6} xs={12}>
                    <Select icon={<BuildIcon />} label="Statistical Design" />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item md={3} sm={6} xs={12}>
                    <Select label="Primary Endpoint" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <Select label="Regulatory Risk Assisment" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText label="Arms" />
                  </Grid>
                </Grid>
                <Divider />
              </Grid>

              <Typography variant="h6" component="h2">
                Objective
              </Typography>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container spacing={1}>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText label="Hypotheis" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText
                      multiinput
                      icon={<BuildIcon />}
                      label="Number of Events"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Typography variant="h6" component="h2">
                Experimental Design
              </Typography>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container spacing={1}>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText icon={<BuildIcon />} label="Sample Size" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText multiinput label="Max Allocatio Ratio" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText multiinput label="Number of Interim Analysis" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText multiinput label="Interim Analysis Spacing" />
                  </Grid>
                </Grid>
              </Grid>

              <Typography variant="h6" component="h2">
                Experimental Design
              </Typography>
              <Grid item md={12} sm={12} xs={12}>
                <Grid container spacing={1}>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText label="Follow-up Time" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText multiinput label="Max Type 1 Error" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <InputText label="Test Staristic" />
                  </Grid>
                  <Grid item md={3} sm={6} xs={12}>
                    <Select label="Test Type" />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </Grid>
    </Grid>
  );
}
