interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Restaurant Manager', 'Customer'],
  tenantName: 'Restaurant',
  applicationName: 'food ordering',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Read restaurant information', 'Book a table', 'Checkout the menus', 'Read user information'],
  ownerAbilities: ['Manage user information', 'Manage restaurant information'],
  getQuoteUrl: 'https://app.roq.ai/proposal/5aca8bb7-0ea3-4200-bfd6-c8b51c7d97d4',
};
