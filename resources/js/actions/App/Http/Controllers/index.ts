import DashboardController from './DashboardController'
import BuilderController from './BuilderController'
import Auth from './Auth'
import AccountSettingsController from './AccountSettingsController'
import Settings from './Settings'
const Controllers = {
    DashboardController: Object.assign(DashboardController, DashboardController),
BuilderController: Object.assign(BuilderController, BuilderController),
Auth: Object.assign(Auth, Auth),
AccountSettingsController: Object.assign(AccountSettingsController, AccountSettingsController),
Settings: Object.assign(Settings, Settings),
}

export default Controllers