import { SettingsComponent } from "../components/settings/settings.component";

export enum navGroup {
    SETTINGS = 'Settings',
    OTHER_INFORMATION = 'Other Information'
}

export const paths = [
    { name: 'Dashboard', path: '', icon: 'home_filled', component: SettingsComponent, group: null, notifications: 0 },
    { name: 'Orders', path: 'orders', icon: 'format_list_bulleted', component: SettingsComponent, group: null, notifications: 15 },
    { name: 'Products', path: 'products', icon: 'discount', component: SettingsComponent, group: null, notifications: 0 },
    { name: 'Categories', path: 'categories', icon: 'folder_open', component: SettingsComponent, group: null, notifications: 0 },
    { name: 'Customers', path: 'customers', icon: 'people_outline', component: SettingsComponent, group: null, notifications: 0 },
    { name: 'Reports', path: 'reports', icon: 'bar_chart', component: SettingsComponent, group: null, notifications: 0 },
    { name: 'Coupons', path: 'coupons', icon: 'star_border', component: SettingsComponent, group: null, notifications: 0 },
    { name: 'Inbox', path: 'inbox', icon: 'chat', component: SettingsComponent, group: null, notifications: 0 },
    { name: 'Knowledge Base', path: 'knowledge-base', icon: 'help_outline', component: SettingsComponent, group: navGroup.OTHER_INFORMATION, notifications: 0 },
    { name: 'Product Updates', path: 'product-updates', icon: 'tips_and_updates', component: SettingsComponent, group: navGroup.OTHER_INFORMATION, notifications: 0 },
    { name: 'Personal Settings', path: 'personal-settings', icon: 'person_outline', component: SettingsComponent, group: navGroup.SETTINGS, notifications: 0 },
    { name: 'Global Settings', path: 'global-settings', icon: 'settings', component: SettingsComponent, group: navGroup.SETTINGS, notifications: 0 },
]