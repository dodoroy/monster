import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'

import {
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Loading,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Avatar,
  Card,
  Breadcrumb,
  BreadcrumbItem,
  Button
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)

Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)

Vue.use(Avatar)
Vue.use(Card)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Button)

Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
// Vue.prototype.$msgbox = MessageBox;
// Vue.prototype.$alert = MessageBox.alert;
// Vue.prototype.$confirm = MessageBox.confirm;
// Vue.prototype.$prompt = MessageBox.prompt;
// Vue.prototype.$notify = Notification;
// Vue.prototype.$message = Message;
