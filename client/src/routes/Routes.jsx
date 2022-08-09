import { BrowserRouter, Route, Routes as Routers } from "react-router-dom";
import Layout from "../layout";
import Clients from "../pages/Clients";
import ConfigManager from "../pages/ConfigManager";
import ConfigDetails from "../pages/ConfigManager/ConfigDetails/ConfigDetails";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Users from "../pages/Users";
import UserDetails from "../pages/Users/UserDetails";
import NotFound from "../pages/_404";
import CampaignBriefs from "../pages/CampaignBriefs";
import PrivateRoutes from "./PrivateRoutes";
import Settings from "../pages/Settings";
import CreateCampaign from "../pages/CampaignBriefs/components/CreateCampaign";
import FacebookAdUpload from "../pages/CampaignBriefs/components/AdUpload/Facebook/FacebookAdUpload";
import ClientDetails from "../pages/Clients/components/ClientDetails";
import DV360AdUpload from "../pages/CampaignBriefs/components/AdUpload/DV360/DV360AdUpload";

const Routes = () => {
    return (
        <BrowserRouter>
            <Routers>
                <Route element={<PrivateRoutes />}>
                    <Route path="/" element={<Layout />}>
                        <Route path="/" element={<Dashboard />} exact />
                        <Route
                            path="/campaign-briefs"
                            element={<CampaignBriefs />}
                            exact
                        />
                        <Route
                            path="/campaign-briefs/new"
                            element={<CreateCampaign />}
                            exact
                        />
                        <Route
                            path="/campaign-brief/:id/ad-upload/new/dv360"
                            element={<DV360AdUpload />}
                            exact
                        />
                        <Route
                            path="/campaign-brief/:id/ad-upload/dv360/:dv360Id"
                            element={<DV360AdUpload />}
                            exact
                        />
                        <Route
                            path="/campaign-brief/:id/ad-upload/new/fb"
                            element={<FacebookAdUpload />}
                            exact
                        />
                        <Route
                            path="/campaign-brief/:id/ad-upload/fb/:fbId"
                            element={<FacebookAdUpload />}
                            exact
                        />
                        <Route
                            path="/campaign-briefs/:id"
                            element={<CreateCampaign />}
                            exact
                        />
                        <Route path="/users" element={<Users />} exact />
                        <Route
                            path="/user"
                            element={<UserDetails />}
                            exact
                        />
                        <Route
                            path="/user/:id"
                            element={<UserDetails />}
                            exact
                        />
                        <Route
                            path="/config"
                            element={<ConfigManager />}
                            exact
                        />
                        <Route
                            path="/config/:id"
                            element={<ConfigDetails />}
                            exact
                        />
                        <Route path="/clients" element={<Clients />} exact />
                        <Route
                            path="/client/new"
                            element={<ClientDetails />}
                            exact
                        />
                        <Route
                            path="/client/:id"
                            element={<ClientDetails />}
                            exact
                        />
                        <Route path="/settings" element={<Settings />} exact />
                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
            </Routers>
        </BrowserRouter>
    );
};

export default Routes;
