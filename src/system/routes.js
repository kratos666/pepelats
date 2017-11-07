import index from "../pages/Index.vue"
import about from "../pages/About.vue"
import gallery from "../pages/Gallery.vue"
import video from "../pages/Video.vue"
import chat from "../pages/Chat.vue"
import auth from "../pages/Auth.vue"
import pageNotFound  from '../pages/404.vue'



export const routes = [
	{path: '/', component: index},
	{path: '/about', component: about},
	{path: '/gallery', component: gallery},
	{path: '/video', component: video},
	{path: '/chat', component: chat},
	{path: '/auth', component: auth},
	{path: '/*', component: pageNotFound}
] 